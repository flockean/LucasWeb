import {Injectable} from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  constructor(private router: Router) {
  }
  // TODO: Own Service for localStorage
  login(username: string, password: string){
    const userData = {
      username: username,
      password: password
    };
    this.storeUserData(userData)
    this.router.navigate(['/MainPortal'])
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
  }

  isLoggedIn(): boolean {
    return !!this.getStoredUserData();
  }

}
