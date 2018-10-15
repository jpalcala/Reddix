import { IPost } from './ipost';
import { Observable, of, Subject } from 'rxjs';
import { GenericService } from 'src/app/core/generic.service';


export class PostsService extends GenericService {

    // Examples posts
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

    // Detect wheter is open or close the post detail
    isOpen = new Subject<boolean>();

    constructor() { super(); }

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
