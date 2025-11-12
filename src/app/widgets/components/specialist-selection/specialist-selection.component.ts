import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output,  } from '@angular/core';

@Component({
  selector: 'app-specialist-selection',
  templateUrl: './specialist-selection.component.html',
  styleUrls: ['./specialist-selection.component.scss'],
  imports: [CommonModule]
})
export class SpecialistSelectionComponent implements OnInit {
  @Output() selectedSpecialist = new EventEmitter();
 professionals = [1,2,3,4];
 selected!: number;

  constructor() { }

  ngOnInit() {
  }

  selectSpecialis(index: number){
    this.selected = index;

    this.selectedSpecialist.emit(this.selected);
  }
}
