import {
    Component,
    ChangeDetectionStrategy,
    ElementRef,
    ChangeDetectorRef,
    Input,
    HostBinding,
    OnDestroy,
    OnInit
} from '@angular/core';
import { BehaviorSubject, merge, Observable, Subject, fromEvent } from 'rxjs';
import { filter, takeUntil, skip } from 'rxjs/operators';
import { EventOutside, GlobalEvents } from '@core';

@Component({
    selector: 'app-grid-item',
    templateUrl: './grid-item.component.html',
    styleUrls: ['./grid-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridItemComponent implements OnInit, OnDestroy {
    @Input()
    public label: string = 'No label';

    public set isSelected(isSelected: boolean) {
        this._isSelected$.next(isSelected);

        if (isSelected) {
            this.initDocumentClickObserver();
        }
    }

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

    public ngOnInit(): void {
        this.initClickObserver();
    }

    public ngOnDestroy(): void {
        this.viewDestroyed$.next(true);
        this.viewDestroyed$.complete();
    }

    private initClickObserver(): void {
        fromEvent<PointerEvent>(this.hostRef.nativeElement, 'click')
            .pipe(
                takeUntil(this.viewDestroyed$),
                filter(() => !this.isSelected)
            )
            .subscribe(() => {
                this.isSelected = true;

                this.changeDetector.markForCheck();
            });
    }

    private initDocumentClickObserver(): void {
        this.globalEvents.fromDocument<PointerEvent>('click')
            .pipe(
                takeUntil(this.viewDestroyedOrItemDeselected$),
                skip(1),
                filter((event) => this.eventOutside.checkForElement(this.hostRef.nativeElement, event))
            )
            .subscribe(() => {
                this.isSelected = false;

                this.changeDetector.markForCheck();
            });
    }
}
