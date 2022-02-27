import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TipperOverviewComponent } from './tipper-overview/tipper-overview.component';


const routes: Routes = [
  {
    path: 'tippers',
    component: TipperOverviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipperRoutingModule { }
