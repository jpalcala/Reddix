import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { IMessage } from './imessage';

@Component({
    templateUrl: './message.component.html'
})
export class MessageComponent {

    // The parameter in Inject is set by material
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: IMessage
    ) {
        console.log(JSON.stringify(data));
    }

}
