import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleFiveComponent } from './example-five.component';

const routes: Routes = [
    {
        path: '',
        component: ExampleFiveComponent
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
export class ExampleFiveRoutingModule {}
