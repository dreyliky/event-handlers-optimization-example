import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { MainLayoutComponent } from './containers';
import { HeaderComponent } from './components';

@NgModule({
    declarations: [
        MainLayoutComponent,
        HeaderComponent
    ],
    imports: [
        SharedModule
    ],
    exports: [
        MainLayoutComponent
    ]
})
export class LayoutsModule {}
