import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/core/admin.service';
import { TippsService } from 'src/app/core/tipps.service';
import { MatchDto } from 'src/app/models/matchdto';

@Component({
  selector: 'admin-overview',
  templateUrl: './admin-overview.component.html',
  styleUrls: ['./admin-overview.component.scss']
})
export class AdminOverviewComponent implements OnInit {
  matches: MatchDto[];

  constructor(private tippsService: TippsService, private adminService: AdminService) { }

  ngOnInit(): void {
    this.tippsService.getMatchResults()
    .subscribe(x => {
      console.log(x);
      this.matches = x;
    });
  }



}

