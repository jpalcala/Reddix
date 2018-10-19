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
                let errorMessage = 'Unknown error';
                // error.error.message | came from backend - check what reddit send to me
                if (error.message) {
                    errorMessage = error.message;
                }
                this.dialog.open(MessageComponent, {
                    data: { message: errorMessage }
                });
                return throwError(error);
            })
        );
    }

}
