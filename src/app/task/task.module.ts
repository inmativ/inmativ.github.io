import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';

import { AddTaskComponent, AllTaskComponent, CurrentTaskComponent, TaskListComponent } from './components';
import { TaskGuard } from './task.guard';

const routes: Route[] = [
  { path: '', redirectTo: 'all', pathMatch: 'full' },
  { path: 'all', component: AllTaskComponent },
  { path: ':id', component: CurrentTaskComponent, canActivate: [TaskGuard] },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [AddTaskComponent, CurrentTaskComponent, TaskListComponent, AllTaskComponent],
})
export class TaskModule { }
