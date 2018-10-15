import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * Service to wrap up the Http calls
 */
@Injectable()
export class HttpService {

    constructor(private httpClient: HttpClient) { }

    get(url: string): Observable<any> {
        return this.httpClient.get(url);
    }

    jsonp(url: string, callback = 'callback'): Observable<any> {
        return this.httpClient.jsonp(url, callback);
    }

    post(url: string, params: any): Observable<any> {
        return this.httpClient.post(url, params);
    }

}
