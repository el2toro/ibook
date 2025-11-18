import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [IconFieldModule, InputTextModule, InputIconModule, ReactiveFormsModule, ButtonModule, CheckboxModule]
})
export class LoginComponent implements OnInit {
  private formBuilder = inject(FormBuilder);
  formGroup!: FormGroup;

  constructor() { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.formGroup = this.formBuilder.group({
      email: [null],
      password: [null],
      rememberMe: [false]
    });

    this.formGroup.valueChanges.subscribe(value => {
      console.log(value);
    });
  }
}
