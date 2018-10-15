import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { IPost } from '../ipost';

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css'],
    providers: [PostsService]
})
export class PostListComponent implements OnInit {

    // Dummy posts
    // posts = Array.from({length: 50}, (_, i) => `Post ${i + 1}`);

    posts: IPost[];

    constructor(private postsService: PostsService) { }

    ngOnInit(): void {
        this.postsService.getPosts().subscribe(posts => {
            this.posts = posts;
        });
    }
}
