import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BaseExampleComponent } from '../base-example.component';

@Component({
    selector: 'app-example-three',
    templateUrl: './example-three.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleThreeComponent extends BaseExampleComponent {}
