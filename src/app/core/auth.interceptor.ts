import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler
} from '@angular/common/http';

export class AuthInterceptor implements HttpInterceptor {

    // AuthService will be created later
    // constructor(private authService: AuthService) { }

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ) {
        console.log('AuthInterceptor');
        const authToken = ''; // Get the token from AuthService
        const authRequest = request.clone({
            // Append headers
            headers: request.headers.set('Authorization', 'Bearer ' + authToken)
        });
        return next.handle(authRequest);
    }

}
