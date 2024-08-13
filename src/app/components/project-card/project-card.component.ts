import { Component } from '@angular/core';
import { ServiceCardComponent } from '../service-card/service-card.component';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [ ServiceCardComponent],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {

}
