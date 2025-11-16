import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePickerModule } from 'primeng/datepicker';

@Component({
  selector: 'app-date-time-selection',
  templateUrl: './date-time-selection.component.html',
  styleUrls: ['./date-time-selection.component.scss'],
   imports: [FormsModule, DatePickerModule]
})
export class DateTimeSelectionComponent implements OnInit {
  @Output() selectDateEvent = new EventEmitter();
  date: Date[] | undefined;

  constructor() { }

  ngOnInit() {
  }

  onDateSelect(){
    this.selectDateEvent.emit(this.date)
  }
}
