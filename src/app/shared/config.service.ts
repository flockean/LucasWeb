import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  constructor(private router: Router,
              private cookieService: CookieService) {
  }
  // TODO: Own Service for localStorage
  // TODO: Please dont save Account in localStorage AND Cookies, wat de hell
  login(username: string, password: string){
    const userData = {
      username: username,
      password: password
    };
    this.storeUserData(userData)
    this.router.navigate(['/MainPortal'])
    this.cookieService.set('YourAccountCookie', JSON.stringify(this.getStoredUserData()))
    return Promise.resolve(true);
  }

  private storeUserData(userData: any) {
    localStorage.setItem('user', JSON.stringify(userData));
  }

  getStoredUserData() {
    const userDataString = localStorage.getItem('user');
    if (userDataString) {
      return JSON.parse(userDataString);
    } else {
      return null;
    }
  }

  logout() {
    localStorage.removeItem('user');
    this.cookieService.delete("YourAccountCookie")
  }

  isLoggedIn(): boolean {
    return !!this.getStoredUserData();
  }

}
