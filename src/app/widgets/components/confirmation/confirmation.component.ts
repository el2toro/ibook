import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { BookingModel } from '../../models/booking-model';
import { BookingService } from '../../services/booking.service';


@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss'],
  imports: [CommonModule, ButtonModule]
})
export class ConfirmationComponent implements OnInit {
  private bookingService = inject(BookingService);
  bookingState!: BookingModel;

  date = new Date();
  location = '123 Main St, City, Country';

  constructor() { }

  ngOnInit() {
    this.getBookingState();
  }

  getBookingState(){
    this.bookingService.getBookingState().subscribe((booking) => {
      if(booking){
        this.bookingState = booking;
      }
    });
  }
}
