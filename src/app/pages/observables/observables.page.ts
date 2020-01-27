import { Component, OnInit } from "@angular/core";
import { Observable, Subject, of } from "rxjs";
import { ThrowStmt } from "@angular/compiler";
import { map, flatMap } from 'rxjs/operators';

@Component({
    selector: "app-observables",
    templateUrl: "./observables.page.html",
    styleUrls: ["./observables.page.scss"],
})
export class ObservablesPage {

    public numsObservable = of(1, 2, 3);
    public subject = new Subject<number>();
    public textBox: number;
    public subjectArray = new Subject<Array<number>>()
    public source = of([1, 2, 3, 4, 5]);

    constructor() {
        console.log("Just before subscribe to numsObservable");
        this.numsObservable.subscribe(num => {
            console.log("Got the next value from the first subscription:" + num);
        });
        
        console.log("Just before subscribe to the subject");
        this.subject.subscribe(num => {
            console.log("The value that get the subject is: " + num);    
        });

        console.log("Just before subscribe to the subject Array");
        this.subjectArray.subscribe(num => {
            console.log("The value that get the subject is: " + num);    
        });
        
        console.log("Using pipe and map from an observable");
        this.numsObservable.pipe(map(val => {
            const modified = val * val;
            console.log("The modified value is: " + modified);
            return modified;
        })).subscribe();

    }

    public 

    public update() {
        this.subject.next(this.textBox);
    }
}
