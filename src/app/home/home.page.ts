import { Component } from '@angular/core';
import { Observable, Subject, of, } from 'rxjs';
import { share, shareReplay, merge } from 'rxjs/operators'

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    private readonly URL = "https://www.google.es/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png";

    public observable: Observable<string>;
    public textBox: string;
    public tabId = 0;

    private subject = new Subject<string>()

    ionViewWillEnter() {
        this.observable = of<string>(this.URL)
        .pipe(
            merge(this.subject),
            shareReplay()
            );
    }

    public update() {
        this.subject.next(this.textBox);
    }

    public do() {
        //this.observable.subscribe(value => console.log(value));
    }

}
