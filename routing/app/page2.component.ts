import { Component } from "@angular/core";
import { Location } from "@angular/common";

@Component({
    selector: "page2",
    templateUrl: "app/page2.component.html"
})

export class Page2 {
    constructor(private location: Location) { }

    goBack() {
        this.location.back();
    }
}