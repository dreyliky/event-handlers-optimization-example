import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleThreeComponent } from './example-three.component';

const routes: Routes = [
    {
        path: '',
        component: ExampleThreeComponent
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class ExampleThreeRoutingModule {}
