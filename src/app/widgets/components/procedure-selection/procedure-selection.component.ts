import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Checkbox } from 'primeng/checkbox';

interface Procedure {
  id: string;
  title: string;
  description: string;
  price: number;
  time: string;
  selected: boolean;
}

@Component({
  selector: 'app-procedure-selection',
  templateUrl: './procedure-selection.component.html',
  styleUrls: ['./procedure-selection.component.scss'],
  imports: [Checkbox, CommonModule, FormsModule]
})

export class ProcedureSelectionComponent implements OnInit {
  @Output() selectedProceduresEvent = new EventEmitter();

  procedures = <Procedure[]>[];
  selectedProcedures = <Procedure[]>[];

  constructor() {}

  ngOnInit() {
    this.initProcedures();
  }

  initProcedures() {
    this.procedures = [
      {
        id: '1',
        title: 'Hirecut & Styling',
        description: 'Professional cut and style',
        price: 45,
        time: '60 min',
        selected: false
      },
      {
        id: '2',
        title: 'Hirecut Coloring',
        description: 'Full color treatment',
        price: 85,
        time: '120 min',
        selected: false
      },
      {
        id: '3',
        title: 'Deep Conditioning',
        description: 'Intensive Hhire treatment',
        price: 35,
        time: '45 min',
        selected: false
      },
      {
        id: '4',
        title: 'Blow Dry & Styling',
        description: 'Professional blow out',
        price: 25,
        time: '30 min',
        selected: false
      },
    ];
  }

  selectProcedure(procedure: Procedure){
    const index = this.selectedProcedures.findIndex(p => p.id === procedure.id);

    if(index !== -1){
      procedure.selected = false;
      this.selectedProcedures.splice(index, 1);

      this.selectedProceduresEvent.emit(!this.haveProceduresSelected());
      return;
    }

    procedure.selected = true;
    this.selectedProcedures.push(procedure);
 
    this.selectedProceduresEvent.emit(!this.haveProceduresSelected());
  }

  isSelected(procedure: Procedure) : boolean{
    return this.selectedProcedures.some(p => p.id === procedure.id)
  }

  private haveProceduresSelected() : boolean{
    return this.selectedProcedures.length > 0;
  }
}
