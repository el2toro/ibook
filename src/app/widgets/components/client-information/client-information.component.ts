import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';

@Component({
  selector: 'app-client-information',
  templateUrl: './client-information.component.html',
  styleUrls: ['./client-information.component.scss'],
  imports: [
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    TextareaModule,
    CommonModule,
    ReactiveFormsModule,
  ],
})
export class ClientInformationComponent implements OnInit {
  @Output() clientInfoComplete = new EventEmitter();
  private formBuilder = inject(FormBuilder);
  formGroup!: FormGroup;

  constructor() {}

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.formGroup = this.formBuilder.group({
      fullName: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      phone: [null, [Validators.required]],
      notes: [null, [Validators.maxLength(100)]],
    });

    this.formGroup.valueChanges.subscribe(() => {
      this.onInputChange();
    });
  }

  onInputChange() {
    if (!this.formGroup) {
      return;
    }

    const isComplete =
      this.formGroup.get('fullName')?.value !== null &&
        this.formGroup.get('email')?.value !== null &&
        this.formGroup.get('phone')?.value !== null;

    if (!isComplete || this.formGroup.invalid) {
      return;
    }

    const clientInfo = this.formGroup.value;

    this.clientInfoComplete.emit(clientInfo);
  }
}
