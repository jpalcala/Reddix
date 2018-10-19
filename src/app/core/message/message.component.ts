import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
    templateUrl: './message.component.html'
})
export class MessageComponent {

    // The parameter in Inject is set by material
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: { message: string }
    ) { }

}
