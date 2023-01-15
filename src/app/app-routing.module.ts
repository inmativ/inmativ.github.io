import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadComponent: () => import('./auth').then(m => m.AuthComponent),
  },
  {
    path: 'task',
    loadChildren: () => import('./task').then(m => m.TaskModule),
    canActivate: [AuthGuard],
  },
  { path: '', redirectTo: 'task', pathMatch: 'full' },
  { path: '**', redirectTo: 'task', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
