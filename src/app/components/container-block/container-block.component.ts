import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-container-block',
  standalone: true,
  imports: [],
  templateUrl: './container-block.component.html',
  styleUrl: './container-block.component.scss'
})
export class ContainerBlockComponent {
@Input() title: string = '';
}
