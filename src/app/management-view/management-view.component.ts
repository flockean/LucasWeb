import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ContainerBlockComponent } from '../components/container-block/container-block.component';

@Component({
  selector: 'app-management-view',
  standalone: true,
  imports: [ReactiveFormsModule, ContainerBlockComponent],
  templateUrl: './management-view.component.html',
  styleUrl: './management-view.component.scss'
})
export class ManagementViewComponent {
  projectForm;
  serviceForm;
  constructor(private formbuilder: FormBuilder) {
    this.serviceForm = this.formbuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })

    this.projectForm = this.formbuilder.group({
      // TODO: fill Data
    })

  }
}
