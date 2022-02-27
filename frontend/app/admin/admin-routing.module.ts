import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminOverviewComponent } from './admin-overview/admin-overview.component';


const routes: Routes = [
  {
    path: 'admin',
    component: AdminOverviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
