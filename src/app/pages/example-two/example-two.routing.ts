import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleTwoComponent } from './example-two.component';

const routes: Routes = [
    {
        path: '',
        component: ExampleTwoComponent
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
export class ExampleTwoRoutingModule {}
