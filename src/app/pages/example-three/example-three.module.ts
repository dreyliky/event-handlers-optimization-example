import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { ExampleThreeComponent } from './example-three.component';
import { ExampleThreeRoutingModule } from './example-three.routing';
import { GridItemComponent } from './grid-item';

@NgModule({
    declarations: [
        ExampleThreeComponent,
        GridItemComponent
    ],
    imports: [
        SharedModule,
        ExampleThreeRoutingModule
    ]
})
export class ExampleThreeModule {}
