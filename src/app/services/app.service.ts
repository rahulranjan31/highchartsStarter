import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {

    constructor(private http: Http) { }
    getdata() {
        return this.http.get('app/resources/data/chartdata.json').map(
            (res) => res.json()
        );
    }
}
