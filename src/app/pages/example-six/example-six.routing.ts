import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleSixComponent } from './example-six.component';

const routes: Routes = [
    {
        path: '',
        component: ExampleSixComponent
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
export class ExampleSixRoutingModule {}
