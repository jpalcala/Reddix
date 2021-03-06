import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { GenericService } from '../../core/generic.service';
import { HttpService } from '../../core/http.service';
import { Post } from './post';
import { formatDate, DatePipe } from '@angular/common';

@Injectable()
export class PostsService extends GenericService {

  constructor(private http: HttpService) { super(); }

  getSubreddit(subreddit: string, limit: number, skip: number = 0): Observable<Post[]> {
    return this
      .http
      .jsonp(`${this.environment.reddit}r/${subreddit}/.json?limit=${limit}&skip=${skip}`, 'jsonp')
      .pipe(map(res => {
        console.log(res);
        return res['data']
          .children
          .map(post =>
            new Post(
              post['data'].id,
              post['data'].author,
              post['data'].subreddit,
              post['data'].title,
              post['data'].thumbnail,
              post['data'].num_comments,
              post['data'].selftext,
               new Date(post['data'].created_utc * 1000)
              )
          );
      }));
  }

  testErrorInterceptor(): void {
    this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe();
  }

}
