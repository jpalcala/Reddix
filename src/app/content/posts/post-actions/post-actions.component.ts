import {
    Component,
    Input,
    Output,
    EventEmitter
} from '@angular/core';
import { MessageService } from 'src/app/core/message/message.service';
import { IMessage } from 'src/app/core/message/imessage';
import { MessageType } from 'src/app/core/message/message-type.enum';

@Component({
    selector: 'app-post-actions',
    templateUrl: './post-actions.component.html',
    styleUrls: ['./post-actions.component.css']
})
export class PostActionsComponent {

    @Input() isExpanded: boolean;
    @Input() isExpandShown: boolean;
    @Input() commentsNumber: number;
    @Output() expand = new EventEmitter<boolean>();
    iconMore = 'expand_more';
    iconLess = 'expand_less';
    icon = this.iconMore;

    constructor(private messageService: MessageService) { }

    onExpand(): void {
        this.isExpanded = !this.isExpanded;
        this.icon = this.isExpanded ? this.iconLess : this.iconMore;
        this.expand.emit(this.isExpanded);
    }

    onViewComments(): void {
        console.log('onViewComments');
        const message: IMessage = {
            title: 'Test',
            message: 'Testing message service',
            type: MessageType.SUCCESS
        };
        this.messageService.testNotification(message);
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
