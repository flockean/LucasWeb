import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";
import {LocalStorageService} from "./local-storage.service";

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  constructor(private router: Router,
              private cookieService: CookieService,
              private storageService: LocalStorageService) {
  }
  // TODO: Please dont save Account in localStorage AND Cookies, wat de hell
  login(username: string, password: string){
    const userData : Profile = {
      username: username,
      password: password,
      permission: Permission.READ
    };
    this.storageService.setItem('user', userData)
    this.router.navigate(['/MainPortal'])
    const time = new Date().toLocaleString()
    this.cookieService.set('YourAccountCookie', `User has been Logged in at: ${time}`)
    return Promise.resolve(true);
  }

  getStoredUserData() {
    return this.storageService.getItem('user')
  }

  logout() {
    this.storageService.removeItem('user')
    this.cookieService.delete("YourAccountCookie")
  }

  isLoggedIn(): boolean {
    return !!this.getStoredUserData()
  }

}


export interface Profile{
  username: string;
  password: string;
  permission: Permission;
}

enum Permission{
  READ = 'READ',
  WRITE = 'WRITE',
  OPERATE = 'OPERATE',
  ADMIN = 'ADMIN'
}
