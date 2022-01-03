import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '@shared';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}
