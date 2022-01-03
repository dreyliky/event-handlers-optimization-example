import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { ExampleOneComponent } from './example-one.component';
import { ExampleOneRoutingModule } from './example-one.routing';
import { GridItemComponent } from './grid-item';

@NgModule({
    declarations: [
        ExampleOneComponent,
        GridItemComponent
    ],
    imports: [
        SharedModule,
        ExampleOneRoutingModule
    ]
})
export class ExampleOneModule {}
