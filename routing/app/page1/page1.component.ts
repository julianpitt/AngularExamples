import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "page1",
    templateUrl: "app/page1/page1.component.html"
})

export class Page1 {
    constructor(private router: Router) { }

    navigate() {
        this.router.navigate(["page2"]);
    }
}