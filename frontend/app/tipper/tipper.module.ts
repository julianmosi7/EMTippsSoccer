import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipperRoutingModule } from './tipper-routing.module';
import { TipperOverviewComponent } from './tipper-overview/tipper-overview.component';
import { TipperNamesComponent } from './tipper-names/tipper-names.component';
import { TippedMatchesComponent } from './tipped-matches/tipped-matches.component';
import { BootstrapModule } from '../bootstrap/bootstrap.module';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [TipperOverviewComponent, TipperNamesComponent, TippedMatchesComponent],
  imports: [
    CommonModule,
    FormsModule,
    TipperRoutingModule,
    BootstrapModule,
    SharedModule,
    CoreModule
  ]
})
export class TipperModule { }
