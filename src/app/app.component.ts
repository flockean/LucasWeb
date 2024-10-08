import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {MainPortalComponent} from "./main-portal/main-portal.component";
import {NgIf} from "@angular/common";
import {ConfigService} from "./shared/config.service";
import { NavibarComponent } from './components/navibar/navibar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgIf, NavibarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'LB Development';
  protected readonly MainPortalComponent = MainPortalComponent;

  constructor(protected configService: ConfigService) {
  }


}
