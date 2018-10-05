import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from './posts.service';
import { IPost } from './ipost';

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
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
