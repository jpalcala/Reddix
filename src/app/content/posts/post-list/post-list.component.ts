import { Component, OnInit } from '@angular/core';
import { Post } from './Post';
import { PostsService } from '../posts.service';

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css'],
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
