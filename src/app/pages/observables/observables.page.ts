import { Component } from "@angular/core";
import { Observable, Subject, of } from "rxjs";
import { map, flatMap } from 'rxjs/operators';

@Component({
    selector: "app-observables",
    templateUrl: "./observables.page.html",
    styleUrls: ["./observables.page.scss"],
})
export class ObservablesPage {

    public numsObservable;
    public subject = new Subject<number>();
    public textBox: number;
    public subjectArray = new Subject<Array<number>>()
    public source = of([]);

    constructor() {

    }


    public update() {
    }
}
