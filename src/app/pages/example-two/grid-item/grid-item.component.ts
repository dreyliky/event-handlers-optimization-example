import { DOCUMENT } from '@angular/common';
import {
    Component,
    ChangeDetectionStrategy,
    ElementRef,
    OnInit,
    Inject,
    ChangeDetectorRef,
    HostBinding,
    Input,
    OnDestroy
} from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { EventOutside } from '@core';

@Component({
    selector: 'app-grid-item',
    templateUrl: './grid-item.component.html',
    styleUrls: ['./grid-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridItemComponent implements OnInit, OnDestroy {
    @Input()
    public label: string = 'No label';

    @HostBinding('class.selected')
    public isSelected = false;

    private viewDestroyed$ = new Subject<boolean>();

    constructor(
        @Inject(DOCUMENT) private readonly document: Document,
        private readonly hostRef: ElementRef<HTMLElement>,
        private readonly eventOutside: EventOutside,
        private readonly changeDetector: ChangeDetectorRef
    ) {}

    public ngOnInit(): void {
        this.initClickObserver();
        this.initDocumentClickObserver();
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
        fromEvent<PointerEvent>(this.document, 'click')
            .pipe(
                takeUntil(this.viewDestroyed$),
                filter((event) => (
                    this.isSelected &&
                    this.eventOutside.checkForElement(this.hostRef.nativeElement, event)
                ))
            )
            .subscribe(() => {
                this.isSelected = false;

                this.changeDetector.markForCheck();
            });
    }
}
