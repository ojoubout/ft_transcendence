import { NgModule } from '@angular/core';

import {RouterModule, Routes} from "@angular/router";
import {EmptyComponent} from "../empty/empty.component";
import {LoginComponent} from "../login/login.component";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: EmptyComponent},
  {path: 'play', component: EmptyComponent},
  {path: 'leaderboard', component: EmptyComponent},
  {path: 'chat-rooms', component: EmptyComponent},
  {path: 'profile/:user', component: EmptyComponent},
  {path: 'edit', component: EmptyComponent},
  {path: 'settings', component: EmptyComponent},
  {path: 'logout', component: EmptyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
