import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksDataRoutingModule } from './tasks-data-routing.module';
import { TasksDataComponent } from './tasks-data.component';


@NgModule({
  declarations: [TasksDataComponent],
  imports: [
    CommonModule,
    TasksDataRoutingModule
  ]
})
export class TasksDataModule { }
