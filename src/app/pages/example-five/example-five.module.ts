import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { ExampleFiveComponent } from './example-five.component';
import { GridItemComponent } from './grid-item';
import { OptimizedGridComponent } from './optimized-grid';
import { ExampleFiveRoutingModule } from './example-five.routing';

@NgModule({
    declarations: [
        ExampleFiveComponent,
        GridItemComponent,
        OptimizedGridComponent
    ],
    imports: [
        SharedModule,
        ExampleFiveRoutingModule
    ]
})
export class ExampleFiveModule {}
