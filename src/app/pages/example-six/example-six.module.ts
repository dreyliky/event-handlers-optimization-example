import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { ExampleSixComponent } from './example-six.component';
import { GridItemComponent } from './grid-item';
import { ExampleSixRoutingModule } from './example-six.routing';

@NgModule({
    declarations: [
        ExampleSixComponent,
        GridItemComponent
    ],
    imports: [
        SharedModule,
        ExampleSixRoutingModule
    ]
})
export class ExampleSixModule {}
