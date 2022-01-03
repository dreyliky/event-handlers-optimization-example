import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BaseExampleComponent } from '../base-example.component';

@Component({
    selector: 'app-example-one',
    templateUrl: './example-one.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleOneComponent extends BaseExampleComponent {}
