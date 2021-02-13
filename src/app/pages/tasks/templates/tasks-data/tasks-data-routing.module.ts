import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TasksDataComponent } from './tasks-data.component';

const routes: Routes = [{ path: '', component: TasksDataComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksDataRoutingModule { }
