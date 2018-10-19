import { MatDialog } from '@angular/material';
import { MessageComponent } from './message.component';
import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

    constructor(private dialog: MatDialog) { }

    testNotification(message: string): void {
        this.dialog.open(MessageComponent, {
            data: { message }
        });
    }
}
