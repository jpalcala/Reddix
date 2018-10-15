import { Component, Input, ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { IPost } from '../../ipost';
import { MediaMatcher } from '@angular/cdk/layout';
import { PostsService } from '../../posts.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-post-item',
    templateUrl: './post-item.component.html',
    styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit, OnDestroy {

    @Input() post: IPost;

    private _mobileQuery: MediaQueryList;
    private _mobileQueryListener: () => void;

    private _subsIsOpen: Subscription;

    isExpanded = false;
    isSmall = false;
    isOpen = false;

    MAX_WIDTH = '600px';

    constructor(
        changeDefectorRef: ChangeDetectorRef,
        media: MediaMatcher,
        private postsService: PostsService
    ) {
        this._mobileQuery = media.matchMedia(`(max-width: ${this.MAX_WIDTH})`);
        this._mobileQueryListener = () => {
            changeDefectorRef.detectChanges();
            this.isSmall = this._mobileQuery.matches;
        };
        this._mobileQuery.addListener(this._mobileQueryListener);
    }

    ngOnInit(): void {
        this._subsIsOpen = this.postsService.isOpen.subscribe(isOpen => this.isOpen = isOpen);
    }

    onPostDetail(id: string): void {
        if (!this.isSmall) {
            this.postsService.isOpen.next(this.isOpen);
        } else {
            // Natigate to detail route
            console.log(id);
        }
    }

    ngOnDestroy(): void {
        this._mobileQuery.removeListener(this._mobileQueryListener);
        this._subsIsOpen.unsubscribe();
    }

}
