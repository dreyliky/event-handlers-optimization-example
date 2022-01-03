import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BaseExampleComponent } from '../base-example.component';

@Component({
    selector: 'app-example-six',
    templateUrl: './example-six.component.html',
    changeDetection: ChangeDetectionStrategy.Default
})
export class ExampleSixComponent extends BaseExampleComponent {}
