import { MatDialog } from '@angular/material';
import { MessageComponent } from './message.component';
import { Injectable } from '@angular/core';
import { IMessage } from './imessage';

@Injectable()
export class MessageService {

    constructor(private dialog: MatDialog) { }

    testNotification(message: IMessage): void {
        this.dialog.open(MessageComponent, {
            data: message
        });
    }
}
