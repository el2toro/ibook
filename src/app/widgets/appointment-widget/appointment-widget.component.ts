import { Component, inject, OnInit } from '@angular/core';
import { MessageService, PrimeIcons } from 'primeng/api';
import { SpecialistSelectionComponent } from '../components/specialist-selection/specialist-selection.component';
import { ProcedureSelectionComponent } from '../components/procedure-selection/procedure-selection.component';
import { StepperModule } from 'primeng/stepper';
import { DateTimeSelectionComponent } from '../components/date-time-selection/date-time-selection.component';
import { ClientInformationComponent } from '../components/client-information/client-information.component';
import { ConfirmationComponent } from '../components/confirmation/confirmation.component';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-appointment-widget',
  templateUrl: './appointment-widget.component.html',
  styleUrls: ['./appointment-widget.component.scss'],
  imports: [
    StepperModule,
    SpecialistSelectionComponent,
    DateTimeSelectionComponent,
    ProcedureSelectionComponent,
    ClientInformationComponent,
    ConfirmationComponent,
    CommonModule,
    ButtonModule
],
  providers: [MessageService],
  standalone: true,
})
export class AppointmentWidgetComponent implements OnInit {
  private messageService = inject(MessageService);

  activeStep: number = 1;

  constructor() {}

  ngOnInit() {}

  back() {
    if(this.activeStep === 1){ return }
    this.activeStep = this.activeStep - 1;
  }

  continue() {
    if(this.activeStep >= 5){ return };

    this.activeStep = this.activeStep + 1;
  }
}
