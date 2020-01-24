import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, Subject, of, } from 'rxjs';
import { share, shareReplay, merge, flatMap, map } from 'rxjs/operators'

interface IResponse {
    data: string;
    status: string;
}

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    private readonly STATUS_URL = "http://5.56.60.217:3001/profile-image/0x41E4e56603bF37a03Bb9DDD88A64b3068052b82a/status";
    private readonly IMAGE_URL = "http://5.56.60.217:3001/profile-image/0x41E4e56603bF37a03Bb9DDD88A64b3068052b82a/";
    private readonly STATUS_OK = "OK";

    public observable: Observable<string>;
    public textBox: string;
    public tabId = 0;

    private subject = new Subject<string>()

    constructor(private http: HttpClient){
        this.observable = this.http.get(this.STATUS_URL)
        .pipe(
            map((response: IResponse)=> {
                let imageUrl = (response && response.status === this.STATUS_OK) ? this.IMAGE_URL : "";
                return imageUrl;
            }),
            merge(this.subject),
            shareReplay(1)
            );
    }

    public update() {
        this.subject.next(this.textBox);
    }

}
