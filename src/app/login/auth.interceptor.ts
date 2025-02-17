import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {OAuthService} from "./oauth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private oauthService: OAuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.oauthService.isAuthenticated()) {
      request = request.clone({
        setHeaders: {Authorization: `Bearer ${this.oauthService.token}`}
      });
    }
    return next.handle(request);
  }
}
