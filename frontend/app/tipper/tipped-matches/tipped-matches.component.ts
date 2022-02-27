import { Component, Input, OnInit } from '@angular/core';
import { TippsService } from 'src/app/core/tipps.service';
import { MatchDto } from 'src/app/models/matchdto';
import { SingleTippDto } from 'src/app/models/singletippdto';

@Component({
  selector: 'tipped-matches',
  templateUrl: './tipped-matches.component.html',
  styleUrls: ['./tipped-matches.component.scss']
})
export class TippedMatchesComponent implements OnInit {
  @Input() tipps: SingleTippDto[];
  @Input() tipperName: string;

  matches: MatchDto[];

  minDiff: number = 0;

  constructor(private tippsService: TippsService) { }

  ngOnInit(): void {
      this.tipps.forEach(x => console.log(x));
      this.tippsService.getMatchResults()
      .subscribe(x => 
      {
          this.matches = x;
          this.matches.forEach(x => console.log(`${x.team1Name} ${x.team2Name}`));
      });
      
  }

  getTipById(id: number): SingleTippDto{
    console.log(`getTipById: ${id}`)
    console.log(`${this.tipps[id-1].matchWithResultId}`)
    return this.tipps[id-1];
  }
}
