import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TasksLoadingComponent } from './tasks-loading.component';

const routes: Routes = [{ path: '', component: TasksLoadingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksLoadingRoutingModule { }
