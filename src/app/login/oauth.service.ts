import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class OAuthService {

  private access_token: string = '';

  constructor(private http: HttpClient, private cookieService: CookieService, private router: Router) {
    this.access_token = cookieService.get('access_token');
  }

  getAuthPage() {
    return this.http.get<{page: string}>(environment.apiBaseUrl + 'oauth_page');
  }

  generateAccessToken(code: string) {
    return this.http.post<{access_token: string}>(environment.apiBaseUrl + 'access_token', code).subscribe({
      next: (token) => {
        console.log(token);
        this.access_token = token.access_token;
        this.cookieService.set('access_token', this.access_token, undefined, '/');
        console.log(this.token);
      },
      error: (error => console.log(error)),
      complete: () => this.router.navigate([''])
    });
  }

  isAuthenticated() {
    return this.access_token != '';
  }

  get token() {
    return this.access_token;
  }

  logout() {
    this.cookieService.delete('access_token', '/');
    this.access_token = '';
  }
}
