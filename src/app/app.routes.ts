import { Routes } from '@angular/router';
import {MainPortalComponent} from "./main-portal/main-portal.component";
import {LogInPageComponent} from "./log-in-page/log-in-page.component";

export const routes: Routes = [
  {
    path: "MainPortal",
    component: MainPortalComponent
  },
  {
    path: "LogIn",
    component: LogInPageComponent
  }
];
