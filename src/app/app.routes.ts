import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { AuthGuard } from './core/guards/auth-guard';
import { DashboardCardComponent } from './features/dashboard/components/dashboard-card/dashboard-card.component';
import { SignupComponent } from './features/auth/signup/signup.component';
import { GuestGuard } from './core/guards/guest-guard';
import { AppointmentWidgetComponent } from './widgets/appointment-widget/appointment-widget.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [GuestGuard] },
  { path: 'signup', component: SignupComponent, canActivate: [GuestGuard] },
  { path: 'appointment', component: AppointmentWidgetComponent},
  {
    path: 'dashboard',
    component: DashboardCardComponent,
    canActivate: [AuthGuard], // Protected route
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard' },
];
