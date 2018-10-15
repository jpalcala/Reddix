import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from './posts.service';
import { Post } from './Post';

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    providers: [PostsService]
})
export class PostListComponent implements OnInit {

    // Dummy posts
    // posts = Array.from({length: 50}, (_, i) => `Post ${i + 1}`);

    posts: Post[];

    constructor(private postsService: PostsService) { }

    ngOnInit(): void {
        this.postsService.getSubreddit('all', 20).subscribe(post => {
          this.posts = post;
        });
    }
}
