import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-time-selection',
  templateUrl: './time-selection.component.html',
  styleUrls: ['./time-selection.component.scss']
})
export class TimeSelectionComponent implements OnInit {
  @Output() selectedTime = new EventEmitter<string>();
  morningTimes = ['9:00', '9:30', '10:00', '10:30', '11:00', '11:30'];
  afternoonTimes = ['12:00', '12:30', '1:00', '1:30', '2:00', '2:30'];
  eveningTimes = ['3:00', '3:30', '4:00', '4:30', '5:00', '5:30'];

  constructor() { }

  ngOnInit() {
  }

  selectTime(time: string, timeSlot: HTMLElement) {
    this.selectedTime.emit(time);
    this.highlightSelectedTime(timeSlot);
  }

  highlightSelectedTime(timeSlot: HTMLElement) {
    let timeSlotes = document.getElementsByClassName('time-slot');
    for (let i = 0; i < timeSlotes.length; i++) {
      timeSlotes[i].classList.remove('highlight');
    }

    timeSlot.classList.add('highlight');
  }
}
