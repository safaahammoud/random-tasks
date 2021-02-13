import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksLoadingRoutingModule } from './tasks-loading-routing.module';
import { TasksLoadingComponent } from './tasks-loading.component';


@NgModule({
  declarations: [TasksLoadingComponent],
  imports: [
    CommonModule,
    TasksLoadingRoutingModule
  ]
})
export class TasksLoadingModule { }
