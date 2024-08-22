import {Component} from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import {CommonModule, KeyValuePipe, NgForOf} from "@angular/common";
import { ContainerBlockComponent } from '../components/container-block/container-block.component';

@Component({
  selector: 'app-cookie',
  standalone: true,
  imports: [
    NgForOf,
    KeyValuePipe,
    CommonModule,
    ContainerBlockComponent
  ],
  templateUrl: './cookie.component.html',
  styleUrl: './cookie.component.scss'
})
export class CookieComponent {
  protected readonly Object = Object;

  // TODO: Do I need a Dependency for CookieService? Uhhhh
  constructor(protected cookieService: CookieService) {
    this.cookieService.set('MainCookie', 'This is your MainCookie, so you can see the List works (cannot be deleted)')
  }

}
