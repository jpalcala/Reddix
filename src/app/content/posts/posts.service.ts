import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { GenericService } from '../../core/generic.service';
import { HttpService } from '../../core/http.service';
import { Post } from './post-list/Post';

@Injectable()
export class PostsService extends GenericService {

  // Examples posts posts : IPost[] = [   {     id: 'ajshd123',     title: 'Post
  // 1',     tag: 'Reddit API',     subReddit: 'r/redditdev',     postedBy:
  // 'u/abc1',     postedDate: new Date(),     commentsNumber: 5   }, {     id:
  // 'f11d12d',     title: 'Post 2',     tag: 'PRAW',     subReddit:
  // 'r/redditdev',     postedBy: 'u/edf2',     postedDate: new Date(),
  // commentsNumber: 4   }, {     id: '1bqjd1',     title: 'Post 3',     tag:
  // 'MOMOS',     subReddit: 'r/redditmomoz',     postedBy: 'u/hij2', postedDate:
  // new Date(),     commentsNumber: 23182   } ]; Detect wheter is open or close
  // the post detail
  isOpen = new Subject<boolean>();

  constructor(private http: HttpService) {
    super();
  }

  getSubreddit(subreddit: string, limit: number, skip: number = 0): Observable<Post[]> {
    return this
      .http
      .jsonp(`${this.environment.reddit}r/${subreddit}/.json?limit=${limit}&skip=${skip}`, 'jsonp')
      .pipe(map(res => {
        console.log(res);
        return res['data']
          .children
          .map(post => new Post(post['data'].author, post['data'].subreddit, post['data'].title, post['data'].thumbnail));
      }));
  }
}
