import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { ExampleFourComponent } from './example-four.component';
import { GridItemComponent } from './grid-item';
import { ExampleFourRoutingModule } from './example-four.routing';

@NgModule({
    declarations: [
        ExampleFourComponent,
        GridItemComponent
    ],
    imports: [
        SharedModule,
        ExampleFourRoutingModule
    ]
})
export class ExampleFourModule {}
