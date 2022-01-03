import { Component, ChangeDetectionStrategy, HostListener, ElementRef, HostBinding, Input } from '@angular/core';
import { EventOutside } from '@core';

@Component({
    selector: 'app-grid-item',
    templateUrl: './grid-item.component.html',
    styleUrls: ['./grid-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridItemComponent {
    @Input()
    public label: string = 'No label';

    @HostBinding('class.selected')
    public isSelected = false;

    constructor(
        private readonly hostRef: ElementRef<HTMLElement>,
        private readonly eventOutside: EventOutside
    ) {}

    @HostListener('click', ['$event'])
    public onClick(): void {
        this.isSelected = true;
    }

    @HostListener('document:click', ['$event'])
    public onDocumentClick(event: PointerEvent): void {
        if (this.isSelected) {
            const isEventOutside = this.eventOutside
                .checkForElement(this.hostRef.nativeElement, event);

            this.isSelected = !isEventOutside;
        }
    }
}
