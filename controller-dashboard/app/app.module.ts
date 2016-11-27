import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/app.component';
import { Page1 }  from './components/page1.component';
import { Page2 }    from './components/page2.component';
import { AppRoutes } from "./routers/app.routes";

import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule,
        RouterModule.forRoot(AppRoutes)
    ],
    declarations: [ AppComponent, Page1, Page2 ],
    bootstrap: [ AppComponent ]

})

export class AppModule { }