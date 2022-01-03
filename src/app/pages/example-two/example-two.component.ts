import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BaseExampleComponent } from '../base-example.component';

@Component({
  selector: 'app-example-two',
  templateUrl: './example-two.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleTwoComponent extends BaseExampleComponent {}
