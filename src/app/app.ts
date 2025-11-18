import { Component, signal } from '@angular/core';
import { AppointmentWidgetComponent } from "./widgets/appointment-widget/appointment-widget.component";
import { ShellComponent } from "./layouts/shell/shell.component";

@Component({
  selector: 'app-root',
  imports: [ShellComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ibook');
}
