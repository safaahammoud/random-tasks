import { TasksEmptyComponent } from './pages/tasks/templates/tasks-empty/tasks-empty.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/tasks-empty',
  //   pathMatch: 'full'
  // },
  { path: 'tasks-empty', component: TasksEmptyComponent },
  { path: 'tasks-data', loadChildren: () => import('./pages/tasks/templates/tasks-data/tasks-data.module').then(m => m.TasksDataModule) },
  { path: 'tasks-loading', loadChildren: () => import('./pages/tasks/templates/tasks-loading/tasks-loading.module').then(m => m.TasksLoadingModule) }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
