import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output,  } from '@angular/core';
import { SpecialistModel } from '../../models/specialist-model';

@Component({
  selector: 'app-specialist-selection',
  templateUrl: './specialist-selection.component.html',
  styleUrls: ['./specialist-selection.component.scss'],
  imports: [CommonModule]
})
export class SpecialistSelectionComponent implements OnInit {
  @Output() selectedSpecialist = new EventEmitter();
  @Input() specialist!: SpecialistModel;
  professionals = <SpecialistModel[]>[];

  selected!: number;

  constructor() { }

  ngOnInit() {
    this.selected = this.specialist ? parseInt(this.specialist.id) - 1 : -1;
    this.initProfessionals();
  }

  selectSpecialis(index: number){
    this.selected = index;

    this.selectedSpecialist.emit(this.professionals[index]);
  }

  initProfessionals(){
    this.professionals= [
      {
    "id": "1",
    "name": "Sarah Johnson",
    "sector": "Hair Styling & Colorist",
    "experience": 8,
    "rating": 4.9,
    "imageUrl": "https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "isAvailable": true
  },
   {
    "id": "2",
    "name": "Emily Carter",
    "sector": "Makeup Artist",
    "experience": 6,
    "rating": 4.8,
    "imageUrl": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "isAvailable": true
  },
  {
    "id": "3",
    "name": "Olivia Martinez",
    "sector": "Nail Technician",
    "experience": 5,
    "rating": 4.7,
    "imageUrl": "https://images.unsplash.com/photo-1508186225823-0963cf9ab0de?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "isAvailable": false
  },
  {
    "id": "4",
    "name": "Jessica Brown",
    "sector": "Skincare Specialist",
    "experience": 7,
    "rating": 4.8,
    "imageUrl": "https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "isAvailable": true
  },
  {
    "id": "5",
    "name": "Amanda Wilson",
    "sector": "Lash & Brow Artist",
    "experience": 4,
    "rating": 4.6,
    "imageUrl": "https://images.unsplash.com/photo-1655386663061-668e05f85700?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "isAvailable": true
  },
  {
    "id": "6",
    "name": "Sophia Anderson",
    "sector": "Hair Stylist",
    "experience": 9,
    "rating": 4.9,
    "imageUrl": "https://images.unsplash.com/photo-1659438068015-9ba5610ad25b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "isAvailable": false
  },
  {
    "id": "7",
    "name": "Mia Thompson",
    "sector": "Makeup & Bridal Artist",
    "experience": 6,
    "rating": 4.8,
    "imageUrl": "https://images.unsplash.com/photo-1657180881998-c8a03ef22695?q=80&w=659&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "isAvailable": true
  },
  {
    "id": "8",
    "name": "Isabella Moore",
    "sector": "Cosmetologist",
    "experience": 10,
    "rating": 4.7,
    "imageUrl": "https://images.unsplash.com/photo-1677791299320-c79a0d3bb085?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "isAvailable": false
  },
  {
    "id": "9",
    "name": "Charlotte Taylor",
    "sector": "Hair Coloring Specialist",
    "experience": 7,
    "rating": 4.8,
    "imageUrl": "https://images.unsplash.com/photo-1634595479858-79dc301eea85?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "isAvailable": true
  },
  {
    "id": "10",
    "name": "Ava Thomas",
    "sector": "Nail & Gel Expert",
    "experience": 5,
    "rating": 4.7,
    "imageUrl": "https://images.unsplash.com/photo-1614435930083-a4b2e35032ce?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "isAvailable": true
  }
    ]
  }
}
