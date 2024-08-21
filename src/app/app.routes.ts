import { Routes } from '@angular/router';
import {MainPortalComponent} from "./main-portal/main-portal.component";
import {LogInPageComponent} from "./log-in-page/log-in-page.component";
import {logInRequired} from "./app.guard";
import {CookieComponent} from "./cookie/cookie.component";
import { ManagementViewComponent } from './management-view/management-view.component';

export const routes: Routes = [
  {
    path: "mainportal",
    component: MainPortalComponent
  },
  {
    path: "login",
    component: LogInPageComponent
  },
  {
    path: "cookies",
    component: CookieComponent
  },
  {
    path: "mgmt",
    component: ManagementViewComponent,
    canActivate: [logInRequired]
  },
  {
    path: "**",
    component: MainPortalComponent
  }
];
