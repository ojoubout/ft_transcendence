import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import {AppRoutingModule} from "./app-routing/app-routing.module";
import { EmptyComponent } from './empty/empty.component';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import { NotFoundComponent } from './not-found/not-found.component';
import {LoginModule} from "./login/login.module";
import {AuthInterceptor} from "./login/auth.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EmptyComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    LoginModule,
    AppRoutingModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
