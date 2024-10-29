import { Component } from '@angular/core';
import {Project, ProjectCardComponent, RootResponse, Service} from '../components/project-card/project-card.component';
import { ContainerBlockComponent } from '../components/container-block/container-block.component';
import {HttpClient} from "@angular/common/http";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-main-portal',
  standalone: true,
  imports: [ProjectCardComponent, ContainerBlockComponent, NgForOf],
  templateUrl: './main-portal.component.html',
  styleUrl: './main-portal.component.scss'
})
export class MainPortalComponent {

  protected readonly projectsPath: string = "assets/projects.json"
  public projects: Project[] = []
  constructor(private httpClient: HttpClient) {



    this.httpClient.get<RootResponse>(this.projectsPath).subscribe((data) => {
      console.log(data)
      this.projects = data.projects
      console.log("Data received")
    })


  }


}
