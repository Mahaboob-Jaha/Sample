import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {retry,catchError} from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor{
    intercept(request:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
        return next.handle(request).pipe(retry(1)
        ,catchError((error)=>{
            let message="";
            return throwError("jdbdjbjdbdbcj");
        })
        )
    }
}