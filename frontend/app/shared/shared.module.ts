import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoalDiffPipe } from './pipes/goal-diff.pipe';
import { FilterByGroupPipe } from './pipes/filter-by-group.pipe';
import { ResultPipe } from './pipes/result.pipe';
import { FlagComponent } from './flag/flag.component';
import { MatchResultComponent } from './match-result/match-result.component';
import { MatchAdminComponent } from './match-admin/match-admin.component';



@NgModule({
  declarations: [GoalDiffPipe, FilterByGroupPipe, ResultPipe, FlagComponent, MatchResultComponent, MatchAdminComponent],
  imports: [
    CommonModule
  ],
  exports: [FilterByGroupPipe, GoalDiffPipe, MatchResultComponent, FlagComponent, MatchAdminComponent],
})
export class SharedModule { }