import {
    Component,
    ChangeDetectionStrategy,
    ElementRef,
    ChangeDetectorRef,
    Input,
    HostBinding,
    OnDestroy
} from '@angular/core';
import { BehaviorSubject, merge, Observable, Subject } from 'rxjs';
import { filter, takeUntil, skip } from 'rxjs/operators';
import { EventOutside, GlobalEvents } from '@core';

@Component({
    selector: 'app-grid-item',
    templateUrl: './grid-item.component.html',
    styleUrls: ['./grid-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridItemComponent implements OnDestroy {
    @Input()
    public label: string = 'No label';

    @Input()
    @HostBinding('attr.data-grid-index')
    public index!: number;

    @HostBinding('class.selected')
    public get isSelected(): boolean {
        return this._isSelected$.getValue();
    }

    private get viewDestroyedOrItemDeselected$(): Observable<boolean> {
        return merge(
            this.viewDestroyed$,
            this._isSelected$
                .pipe(filter((isSelected) => !isSelected))
        )
    }

    private viewDestroyed$ = new Subject<boolean>();
    private _isSelected$ = new BehaviorSubject<boolean>(false);

    constructor(
        private readonly hostRef: ElementRef<HTMLElement>,
        private readonly globalEvents: GlobalEvents,
        private readonly eventOutside: EventOutside,
        private readonly changeDetector: ChangeDetectorRef
    ) {}

    public ngOnDestroy(): void {
        this.viewDestroyed$.next(true);
        this.viewDestroyed$.complete();
    }

    public select(): void {
        this._isSelected$.next(true);
        this.initDocumentClickObserver();
        this.changeDetector.markForCheck();
    }

    public deselect(): void {
        this._isSelected$.next(false);
        this.changeDetector.markForCheck();
    }

    private initDocumentClickObserver(): void {
        this.globalEvents.fromDocument<PointerEvent>('click')
            .pipe(
                takeUntil(this.viewDestroyedOrItemDeselected$),
                skip(1),
                filter((event) => this.eventOutside.checkForElement(this.hostRef.nativeElement, event))
            )
            .subscribe(() => this.deselect());
    }
}
