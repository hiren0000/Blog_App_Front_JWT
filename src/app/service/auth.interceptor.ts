import { Injectable } from '@angular/core';
import {HttpRequest,   HttpHandler,   HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginServiceService } from './login-service.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  
    constructor(public login: LoginServiceService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    const token = this.login.getToken();

    console.log("inside interceptor !! ")
    console.log(token);
    
    

    if(token != null)
    {
      request = request.clone({setHeaders: { Authorization: `Bearer ${token}`},
    });

    }  

    return next.handle(request);
  }
}

export const authInterceptorProviders =[
    {
        provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptor,
        multi: true,

    },
];