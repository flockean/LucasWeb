import {Injectable, inject} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot} from '@angular/router';
import {ConfigService} from "./shared/config.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(private configService: ConfigService, private router: Router) {}

  LogIn(): boolean {
    if (this.configService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}

export const logInRequired: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  return inject(AuthGuard).LogIn()};
