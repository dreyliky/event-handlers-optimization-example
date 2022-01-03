import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BaseExampleComponent } from '../base-example.component';

@Component({
    selector: 'app-example-four',
    templateUrl: './example-four.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleFourComponent extends BaseExampleComponent {}
