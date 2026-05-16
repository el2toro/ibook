import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BookingModel } from '../models/booking-model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
private bookingState: BehaviorSubject<BookingModel | null> = new BehaviorSubject<BookingModel | null>(null);

constructor() { }

getBookingState() : Observable<BookingModel | null> {
  return this.bookingState.asObservable();
}

updateBookingState(booking: BookingModel) : void {
  this.bookingState.next(booking);
}
}
