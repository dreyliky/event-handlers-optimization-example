import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRouteEnum } from '@core';
import { MainLayoutComponent } from '@layouts';

const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path: AppRouteEnum.ExampleOne,
                loadChildren: () => import('./pages/example-one/example-one.module').then((m) => m.ExampleOneModule)
            },
            {
                path: AppRouteEnum.ExampleTwo,
                loadChildren: () => import('./pages/example-two/example-two.module').then((m) => m.ExampleTwoModule)
            },
            {
                path: AppRouteEnum.ExampleThree,
                loadChildren: () => import('./pages/example-three/example-three.module').then((m) => m.ExampleThreeModule)
            },
            {
                path: AppRouteEnum.ExampleFour,
                loadChildren: () => import('./pages/example-four/example-four.module').then((m) => m.ExampleFourModule)
            },
            {
                path: AppRouteEnum.ExampleFive,
                loadChildren: () => import('./pages/example-five/example-five.module').then((m) => m.ExampleFiveModule)
            },
            {
                path: AppRouteEnum.ExampleSix,
                loadChildren: () => import('./pages/example-six/example-six.module').then((m) => m.ExampleSixModule)
            },
            {
                path: '**',
                redirectTo: AppRouteEnum.ExampleOne,
                pathMatch: 'full'
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
