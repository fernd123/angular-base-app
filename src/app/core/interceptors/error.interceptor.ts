import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private router: Router) { }
    realoding = 0;

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
        return next.handle(request).pipe(catchError(err => {
            if(err.status === 0){ // Server does not respond
                alert('Server connection refused');
                return throwError(err);
            }
            if (err.status === 500){ // Resource not found in server
                console.log("Resource not found");
                return throwError(err);
            }

            if(err.status === 400){ // Invalid operation or bad request
                console.log("Bad request");
                return throwError(err);
            }
        }));
    }
}
