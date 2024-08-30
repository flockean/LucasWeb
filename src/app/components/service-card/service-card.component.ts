import { Component, Input } from '@angular/core';
import { Service } from '../project-card/project-card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [NgFor],
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.scss'
})
export class ServiceCardComponent {

  constructor() {}
  @Input() services: Service[] = []
}
