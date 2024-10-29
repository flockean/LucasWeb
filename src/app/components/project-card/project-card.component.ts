import {Component, Input} from '@angular/core';
import {ServiceCardComponent} from '../service-card/service-card.component';
import {NgFor, NgIf} from '@angular/common';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [ServiceCardComponent, NgFor, NgIf],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {


  @Input() public project: Project | undefined

  constructor() {
  }


}

export interface RootResponse{
  _comment: string,
  projects: Project[],

}

export interface Project {
  project_id: number,
  name: string,
  description: string,
  logo: BinaryData | undefined
  services: Service[]
}

export interface Service {
  service_id: number,
  name: string,
  lang: string,
  focus: string,
  project: number
}
