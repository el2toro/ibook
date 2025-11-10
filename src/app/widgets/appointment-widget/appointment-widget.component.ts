import {
  Component,
  ComponentRef,
  inject,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { StepsModule } from 'primeng/steps';
import { SpecialistSelectionComponent } from '../components/specialist-selection/specialist-selection.component';
import { ProcedureSelectionComponent } from '../components/procedure-selection/procedure-selection.component';

@Component({
  selector: 'app-appointment-widget',
  templateUrl: './appointment-widget.component.html',
  styleUrls: ['./appointment-widget.component.scss'],
  imports: [StepsModule],
  providers: [MessageService],
  standalone: true,
})
export class AppointmentWidgetComponent implements OnInit {
  private messageService = inject(MessageService);
  @ViewChild('dynamicContainer', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;
  componentRef!: ComponentRef<any>;

  items: MenuItem[] | undefined;
  activeIndex: number = 0;

  constructor() {}

  ngOnInit() {
   this.container.createComponent(SpecialistSelectionComponent)
    this.items = [
      {
        label: 'Personal',
        command: (event: any) =>{

            this.loadDynamicComponenet(SpecialistSelectionComponent)

              this.messageService.add({
            severity: 'info',
            summary: 'First Step',
            detail: event.item.label,
          })
        }
        
      },
      {
        label: 'Seat',
        command: (event: any) =>
         { 
             this.loadDynamicComponenet(ProcedureSelectionComponent)
            this.messageService.add({
            severity: 'info',
            summary: 'Second Step',
            detail: event.item.label,
          })}
      },
      {
        label: 'Payment',
        command: (event: any) =>
          this.messageService.add({
            severity: 'info',
            summary: 'Third Step',
            detail: event.item.label,
          }),
      },
      {
        label: 'Confirmation',
        command: (event: any) =>
          this.messageService.add({
            severity: 'info',
            summary: 'Last Step',
            detail: event.item.label,
          }),
      },
    ];
  }

  onActiveIndexChange(event: number) {
    this.activeIndex = event;
  }

  loadDynamicComponenet(component: any) {
     // Clear any previously loaded component
    this.container.clear();

    // Dynamically create the component
    this.componentRef = this.container.createComponent(component);

      // Optionally pass data to the component
    //this.componentRef.instance.specialistName = 'Hair Stylist';

    // Optionally listen to events emitted from the component
    this.componentRef.instance.selected.subscribe((data: any) => {
      console.log('Specialist selected:', data);
    });
  }

   // Optionally destroy the component
  destroyComponent() {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }
}
