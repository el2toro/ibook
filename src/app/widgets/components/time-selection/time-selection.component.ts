import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-selection',
  templateUrl: './time-selection.component.html',
  styleUrls: ['./time-selection.component.scss']
})
export class TimeSelectionComponent implements OnInit {
  timeSlots = [1, 2, 3, 4, 5, 6];
  
  constructor() { }

  ngOnInit() {
  }

}
