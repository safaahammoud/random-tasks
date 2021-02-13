import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksEmptyRoutingModule } from './tasks-empty-routing.module';
import { TasksEmptyComponent } from './tasks-empty.component';


@NgModule({
  declarations: [TasksEmptyComponent],
  imports: [
    CommonModule,
    TasksEmptyRoutingModule
  ]
})
export class TasksEmptyModule { }
