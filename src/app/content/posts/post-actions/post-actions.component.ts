import {
    Component,
    Input,
    Output,
    EventEmitter
} from '@angular/core';

@Component({
    selector: 'app-post-actions',
    templateUrl: './post-actions.component.html',
    styleUrls: ['./post-actions.component.css']
})
export class PostActionsComponent {

    @Input() isExpanded: boolean;
    @Input() commentsNumber: number;
    @Output() expand = new EventEmitter<boolean>();
    iconMore = 'expand_more';
    iconLess = 'expand_less';
    icon = this.iconMore;

    onExpand(): void {
        this.isExpanded = !this.isExpanded;
        this.icon = this.isExpanded ? this.iconLess : this.iconMore;
        this.expand.emit(this.isExpanded);
    }

    onViewComments(): void {
        console.log('onViewComments');
    }

    onShare(): void {
        console.log('onShare');
    }

    onSave(): void {
        console.log('onSave');
    }

    onStar(): void {
        console.log('onStar');
    }

    onBlock(): void {
        console.log('onBlock');
    }

    onFlag(): void {
        console.log('onFlag');
    }
}
