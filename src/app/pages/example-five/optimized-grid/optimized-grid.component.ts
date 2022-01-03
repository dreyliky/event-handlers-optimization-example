import { Component, OnInit, ChangeDetectionStrategy, ContentChildren, QueryList, ElementRef } from '@angular/core';
import { filter, fromEvent, map, Subject, takeUntil } from 'rxjs';
import { GridItemComponent } from '../grid-item';

@Component({
    selector: 'app-optimized-grid',
    templateUrl: './optimized-grid.component.html',
    styleUrls: ['./optimized-grid.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OptimizedGridComponent implements OnInit {
    @ContentChildren(GridItemComponent)
    private gridItemComponentList!: QueryList<GridItemComponent>;

    private readonly viewDestroyed$ = new Subject<boolean>();

    constructor(
        private readonly hostRef: ElementRef<HTMLElement>
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
                map((event) => event.target as HTMLElement),
                map((targetElement) => targetElement.closest('app-grid-item')),
                filter((gridItemElement): gridItemElement is HTMLElement => !!gridItemElement),
                map((gridItemElement) => gridItemElement.getAttribute('data-grid-index') as string),
                map((gridItemIndex) => this.gridItemComponentList.get(+gridItemIndex))
            )
            .subscribe((gridItemComponent) => gridItemComponent?.select());
    }
}
