import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonComponent } from 'ngx-os';
import { ExampleOneComponent } from './example-one.component';

const routes: Routes = [
    {
        path: '',
        component: ExampleOneComponent
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
export class ExampleOneRoutingModule {}
