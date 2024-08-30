import { Component } from '@angular/core';
import { ServiceCardComponent} from '../service-card/service-card.component';
import { HttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [ServiceCardComponent, NgFor],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {

  protected readonly projectsPath: string = "assets/projects.json"

  public projects: Project[] = []
  public services: Service[] = []

  constructor(private httpClient: HttpClient) {


  this.httpClient.get<RootResponse>(this.projectsPath).subscribe((data) => {
      this.projects = data.projects
      this.services = data.services
      console.log("Data received")
    })
  }

  filterServiceToProject(project_id: number): Service[] {
    return this.services.filter(service => service.project === project_id)
  }

}

export interface RootResponse{
  _comment: string,
  projects: Project[],
  services: Service[]

}

export interface Project {
  project_id: number,
  name: string,
  description: string,
  logo: BinaryData | undefined
}

export interface Service {
  service_id: number,
  name: string,
  lang: string,
  focus: string,
  project: number
}
