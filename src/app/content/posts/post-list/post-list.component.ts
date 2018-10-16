import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostsService } from '../posts.service';

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css'],
    providers: [PostsService]
})
export class PostListComponent implements OnInit {

    posts: Post[];

    isOpen = false;

    constructor(private postsService: PostsService) { }

    ngOnInit(): void {
        this.postsService.getSubreddit('all', 20).subscribe(post => {
            this.posts = post;
        });
    }

    onShowDetail(id: string): void {
        console.log('onShowDetail', id);
        this.isOpen = !this.isOpen;
    }
}
