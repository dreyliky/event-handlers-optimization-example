import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BaseExampleComponent } from '../base-example.component';

@Component({
    selector: 'app-example-five',
    templateUrl: './example-five.component.html',
    styleUrls: ['./example-five.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleFiveComponent extends BaseExampleComponent {}
