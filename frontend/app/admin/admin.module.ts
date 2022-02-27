import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import { CoreModule } from '../core/core.module';
import { AdminOverviewComponent } from './admin-overview/admin-overview.component';
import { BootstrapModule } from '../bootstrap/bootstrap.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [AdminOverviewComponent],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    BootstrapModule,
    SharedModule,
    CoreModule
  ]
})
export class AdminModule { }
