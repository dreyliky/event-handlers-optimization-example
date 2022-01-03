import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-grid',
    template: '<ng-content></ng-content>',
    styleUrls: ['./grid.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridComponent {}
