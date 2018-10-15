import { Observable, of } from 'rxjs';
import {  map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './Post';

@Injectable()
export class PostsService {
    url = 'http://reddit.com/';
    /**
     *
     */
    constructor(private http: HttpClient) {
    }


    getSubreddit(subreddit: string, limit: number, skip: number = 0): Observable<Post[]> {
        return this.http.jsonp(`${this.url}r/${subreddit}/.json?limit=${limit}&skip=${skip}`, 'jsonp').pipe(map(res => {
            console.log(res);
            return res['data'].children.map(post =>
                 new Post(post['data'].author,
                 post['data'].subreddit, post['data'].title, post['data'].thumbnail )
            );
        }));
    }
}
