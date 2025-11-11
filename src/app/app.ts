import { Component, signal } from '@angular/core';
import { AppointmentWidgetComponent } from "./widgets/appointment-widget/appointment-widget.component";

@Component({
  selector: 'app-root',
  imports: [AppointmentWidgetComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ibook');
}
