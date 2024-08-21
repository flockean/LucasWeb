import { Component } from '@angular/core';
import { ConfigService } from '../../shared/config.service';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navibar',
  standalone: true,
  imports: [NgIf, RouterLink],
  templateUrl: './navibar.component.html',
  styleUrl: './navibar.component.scss'
})
export class NavibarComponent {

constructor(protected configService: ConfigService){}

}
