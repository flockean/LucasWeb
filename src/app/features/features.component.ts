import { Component } from '@angular/core';
import { ContainerBlockComponent } from '../components/container-block/container-block.component';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [ContainerBlockComponent],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss'
})
export class FeaturesComponent {

}
