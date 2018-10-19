import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpErrorResponse,
    HttpEvent
} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { MatDialog } from '@angular/material';
import { MessageComponent } from './message/message.component';
import { IMessage } from './message/imessage';
import { MessageType } from './message/message-type.enum';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(private dialog: MatDialog) { }

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        console.log('ErrorInterceptor');
        return next.handle(request).pipe(
            catchError((error: HttpErrorResponse) => {
                const message: IMessage = {
                    title: 'An error occurred',
                    message: 'Unknow error',
                    type: MessageType.ERROR
                };
                // error.error.message | came from backend - check what reddit send to me
                if (error.message) {
                    message.message = error.message;
                }
                this.dialog.open(MessageComponent, {
                    data: message
                });
                return throwError(error);
            })
        );
    }

}
