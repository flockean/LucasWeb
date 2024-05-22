import {Component} from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-cookie',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './cookie.component.html',
  styleUrl: './cookie.component.scss'
})
export class CookieComponent {

  // TODO: Do I need a Dependency for CookieService? Uhhhh
  constructor(private cookieService: CookieService) {
    this.cookieService.set('MainCookie', 'This is your Cookie, no one else!')
    this.cookieService.set('SecondCookie', "Well, this is your second Chocolate Cookie")
  }

  getCookies() {
    const allCookies = this.cookieService.getAll()
    return JSON.stringify(allCookies)
  }
}
