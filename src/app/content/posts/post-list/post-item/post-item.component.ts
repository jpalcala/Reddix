import { Component, Input, ChangeDetectorRef, OnDestroy, Output, EventEmitter } from '@angular/core';
import { IPost } from '../../ipost';
import { MediaMatcher } from '@angular/cdk/layout';
import { PostsService } from '../../posts.service';

@Component({
    selector: 'app-post-item',
    templateUrl: './post-item.component.html',
    styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnDestroy {

    @Input() post: IPost;
    @Output() showDetail = new EventEmitter<string>();

    private _mobileQuery: MediaQueryList;
    private _mobileQueryListener: () => void;

    isExpanded = false;
    isSmall = false;

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

    /**
     * Determine wheter is going to show the PostDetail
     * next to the list or in a new route
     * @param id Identifier of the post
     */
    onPostDetail(id: string): void {
        if (!this.isSmall) {
            this.showDetail.emit(id);
        } else {
            // Navigate to detail route
            console.log(id);
        }
    }

    ngOnDestroy(): void {
        this._mobileQuery.removeListener(this._mobileQueryListener);
    }

}
