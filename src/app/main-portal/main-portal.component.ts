import { Component } from '@angular/core';
import { ProjectCardComponent } from '../components/project-card/project-card.component';
import { ContainerBlockComponent } from '../components/container-block/container-block.component';

@Component({
  selector: 'app-main-portal',
  standalone: true,
  imports: [ ProjectCardComponent, ContainerBlockComponent ],
  templateUrl: './main-portal.component.html',
  styleUrl: './main-portal.component.scss'
})
export class MainPortalComponent {

}
