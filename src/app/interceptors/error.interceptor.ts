import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { customError, statusError } from './error.map';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private router: Router
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    return next.handle(request)
    .pipe(
      catchError((err: HttpErrorResponse) => {
        let message: string;

        if (err.error?.errorCode) {
          message = customError.get(err.error.errorCode) || 'Error Interno';
        } else {
          message = statusError.get(err.status) || 'Error Interno';
        }

        if (err.status === 401) {
          this.router.navigateByUrl('/');
        }

        alert(message);

        return throwError(err);
      })
    );
  }
}
