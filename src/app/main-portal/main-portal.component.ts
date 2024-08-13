import { Component } from '@angular/core';
import { ProjectCardComponent } from '../components/project-card/project-card.component';

@Component({
  selector: 'app-main-portal',
  standalone: true,
  imports: [ ProjectCardComponent ],
  templateUrl: './main-portal.component.html',
  styleUrl: './main-portal.component.scss'
})
export class MainPortalComponent {

}
