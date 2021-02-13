import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TasksEmptyComponent } from './tasks-empty.component';

const routes: Routes = [{ path: '', component: TasksEmptyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksEmptyRoutingModule { }
