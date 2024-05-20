import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {ConfigService} from "./shared/config.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private configService: ConfigService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.configService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/LogIn']);
      return false;
    }
  }
}
