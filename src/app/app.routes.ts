import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TimerCubeComponent } from './components/timer-cube/timer-cube.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'timer-cube', component: TimerCubeComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
