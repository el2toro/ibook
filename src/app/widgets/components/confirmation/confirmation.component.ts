import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface Procedure {
  name: string;
  icon: string;
  time?: string;
  price?: string;
}

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss'],
  imports: [CommonModule]
})
export class ConfirmationComponent implements OnInit {
  procedures: Procedure[] = [
    { name: 'Haircut', icon: 'pi pi-verified', time: '30 minutes', price: '$30' },
    { name: 'Manicure', icon: 'pi pi-verified', time: '45 minutes', price: '$25' },
    { name: 'Hair Coloring', icon: 'pi pi-verified', time: '60 minutes', price: '$60' },
  ];

  time = '10:00 AM';
  date = new Date();
  location = '123 Main St, City, Country';

  constructor() { }

  ngOnInit() {
  }

}
