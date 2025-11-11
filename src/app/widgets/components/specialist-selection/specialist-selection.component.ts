import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-specialist-selection',
  templateUrl: './specialist-selection.component.html',
  styleUrls: ['./specialist-selection.component.scss']
})
export class SpecialistSelectionComponent implements OnInit {
 professionals = [1,2,3,4]
  constructor() { }

  ngOnInit() {
  }

}
