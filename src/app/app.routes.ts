import { Routes } from '@angular/router';
import {MainPortalComponent} from "./main-portal/main-portal.component";
import {LogInPageComponent} from "./log-in-page/log-in-page.component";
import {AuthGuard} from "./app.guard";

export const routes: Routes = [
  {
    path: "MainPortal",
    canActivate: [AuthGuard],
    component: MainPortalComponent
  },
  {
    path: "LogIn",
    component: LogInPageComponent
  }
];
