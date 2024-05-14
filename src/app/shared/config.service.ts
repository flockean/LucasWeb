import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  constructor() {
  }
  // TODO: Own Service for localStorage
  login(username: string, password: string){
    const userData = {
      username: username,
      password: password
    };
    this.storeUserData(userData)
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
