import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxOsModule } from 'ngx-os';
import { GridComponent } from './grid'

@NgModule({
    declarations: [
        GridComponent
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        NgxOsModule,
        GridComponent
    ]
})
export class SharedModule {}
