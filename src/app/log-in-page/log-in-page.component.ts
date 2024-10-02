import {Component} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {ConfigService} from "../shared/config.service";
import {NgIf} from "@angular/common";
import { ContainerBlockComponent } from '../components/container-block/container-block.component';


@Component({
  selector: 'app-log-in-page',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    ContainerBlockComponent
  ],
  templateUrl: './log-in-page.component.html',
  styleUrl: './log-in-page.component.scss'
})
export class LogInPageComponent {
  userForm;
  constructor(
    protected configService: ConfigService,
    private formbuilder: FormBuilder
  ) {
    this.userForm = this.formbuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  // TODO: Implementation of LogIn more elegant
  // please never implement LogIn like this!
  onSubmit() {
    console.log(this.userForm.value.username)
    this.configService.login(this.userForm.value.username!, this.userForm.value.password!)
  }
}

