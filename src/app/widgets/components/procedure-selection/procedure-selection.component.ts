import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Checkbox } from 'primeng/checkbox';
import { ProcedureModel } from '../../models/procedure-model';

@Component({
  selector: 'app-procedure-selection',
  templateUrl: './procedure-selection.component.html',
  styleUrls: ['./procedure-selection.component.scss'],
  imports: [Checkbox, CommonModule, FormsModule]
})

export class ProcedureSelectionComponent implements OnInit {
  @Output() selectedProceduresEvent = new EventEmitter();

  procedures = <ProcedureModel[]>[];
  selectedProcedures = <ProcedureModel[]>[];

  constructor() {}

  ngOnInit() {
    this.initProcedures();
  }

  selectProcedure(procedure: ProcedureModel){
    const index = this.selectedProcedures.findIndex(p => p.id === procedure.id);

    if(index !== -1){
      this.selectedProcedures.splice(index, 1);

      this.selectedProceduresEvent.emit(this.selectedProcedures);
      return;
    }

    this.selectedProcedures.push(procedure);
 
    this.selectedProceduresEvent.emit(this.selectedProcedures);
  }

  isSelected(procedure: ProcedureModel) : boolean{
    return this.selectedProcedures.some(p => p.id === procedure.id)
  }

  initProcedures() {
    this.procedures = [
      {
        id: '1',
        name: 'Hirecut & Styling',
        description: 'Professional cut and style',
        price: 45,
        duration: 60
      },
      {
        id: '2',
        name: 'Hirecut Coloring',
        description: 'Full color treatment',
        price: 85,
        duration: 120
      },
      {
        id: '3',
        name: 'Deep Conditioning',
        description: 'Intensive Hhire treatment',
        price: 35,
        duration: 45,
      },
      {
        id: '4',
        name: 'Blow Dry & Styling',
        description: 'Professional blow out',
        price: 25,
        duration: 30
      },
      {
        id: '5',
        name: 'Blow Dry & Styling',
        description: 'Professional blow out',
        price: 25,
        duration: 30          
      },
      {
        id: '6',
        name: 'Blow Dry & Styling',
        description: 'Professional blow out',
        price: 25,
        duration: 30
      },
      {
        id: '7',
        name: 'Blow Dry & Styling',
        description: 'Professional blow out',
        price: 25,
        duration: 30,
      },
    ];
  }
}
