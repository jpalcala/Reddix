import { IPost } from './ipost';
import { Observable, of } from 'rxjs';

export class PostsService {

    posts: IPost[] = [
        {
            id: 'ajshd123',
            title: 'Post 1',
            tag: 'Reddit API',
            subReddit: 'r/redditdev',
            postedBy: 'u/abc1',
            postedDate: new Date(),
            commentsNumber: 5
        },
        {
            id: 'f11d12d',
            title: 'Post 2',
            tag: 'PRAW',
            subReddit: 'r/redditdev',
            postedBy: 'u/edf2',
            postedDate: new Date(),
            commentsNumber: 4
        },
        {
            id: '1bqjd1',
            title: 'Post 3',
            tag: 'MOMOS',
            subReddit: 'r/redditmomoz',
            postedBy: 'u/hij2',
            postedDate: new Date(),
            commentsNumber: 23182
        },
    ];

    /**
     * Get the post list
     */
    getPosts(): Observable<IPost[]> {
        return of(this.posts.slice());
    }

    /**
     * For now the 'id' is the index in the arrowF
     * @param id Identifier of the post
     */
    getPost(id: number): Observable<IPost> {
        return of(this.posts[id]);
    }

}
