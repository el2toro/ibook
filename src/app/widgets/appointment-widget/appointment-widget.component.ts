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
import { TimeSelectionComponent } from "../components/time-selection/time-selection.component";
import { SpecialistModel } from '../models/specialist-model';
import { BookingService } from '../services/booking.service';
import { BookingModel } from '../models/booking-model';
import { ProcedureModel } from '../models/procedure-model';
import { CustomerModel } from '../models/customer-model';

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
    ButtonModule,
    TimeSelectionComponent
],
  providers: [MessageService],
  standalone: true,
})
export class AppointmentWidgetComponent implements OnInit {
  private messageService = inject(MessageService);
  private bookingService = inject(BookingService);
  bookingState!: BookingModel;
  activeStep: number = 1;

  get isDisabled() : boolean {
    return this.isButtonContinueDisabled();
  }

  constructor() {}

  ngOnInit() {
    this.getBookingState();
  }

  back() {
    if(this.activeStep === 1){ return }
    this.activeStep = this.activeStep - 1;
  }

  continue() {
    if(this.activeStep >= 6){ return };

    this.activeStep = this.activeStep + 1;
    this.bookingService.updateBookingState(this.bookingState);
  }

  onSpecialistSelect(specialist: SpecialistModel){
    this.bookingState.specialist = specialist;
  }

  onProcedureSelect(procedures: ProcedureModel[]){
    this.bookingState.procedures = procedures;
  }

  onDateSelect(date: Date){
    this.bookingState.date = date;
  }

  onTimeSelect(time: string){
    this.bookingState.time = time;
  }

  onClientInfoComplete(clientInfo: CustomerModel){
    this.bookingState.client = clientInfo;
  }

  getBookingState() : void {
   this.bookingService.getBookingState().subscribe({
      next: (bookingState) => {
        this.bookingState = bookingState ?? this.buildBookingInitialState();
      }
    });
  }

  buildBookingInitialState() : BookingModel {
    return {
      specialist: null!,
      procedures: null!,
      date: null!,
      time: '',
      client: null!
    }
  }

  isButtonContinueDisabled() : boolean {
    switch(this.activeStep){
      case 1:
        return !this.bookingState.specialist;
      case 2:
        return !this.bookingState.procedures || this.bookingState.procedures.length === 0;
      case 3:
        return !this.bookingState.date; 
      case 4:  
        return !this.bookingState.time;
      case 5:  
      return !this.bookingState.client;
      default:
        return true;
    }
  }
}
