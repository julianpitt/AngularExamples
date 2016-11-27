import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Page1 }  from './page1/page1.component';
import { Page2 }    from './page2.component';

import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";


const AppRoutes: any = [
    { path: "page2", component: Page2 },
    { path: "", component: Page1 }
];

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