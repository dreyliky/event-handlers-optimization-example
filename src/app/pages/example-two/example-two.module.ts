import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { ExampleTwoComponent } from './example-two.component';
import { ExampleTwoRoutingModule } from './example-two.routing';
import { GridItemComponent } from './grid-item';

@NgModule({
    declarations: [
        ExampleTwoComponent,
        GridItemComponent
    ],
    imports: [
        SharedModule,
        ExampleTwoRoutingModule
    ]
})
export class ExampleTwoModule {}
