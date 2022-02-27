import { Component, Input, OnInit } from '@angular/core';
import { MatchDto } from 'src/app/models/matchdto';
import { SingleTippDto } from 'src/app/models/singletippdto';

@Component({
  selector: '[match-result]',
  templateUrl: './match-result.component.html',
  styleUrls: ['./match-result.component.scss']
})
export class MatchResultComponent implements OnInit {
  @Input() match: MatchDto;
  @Input() tipp: SingleTippDto; 
  @Input() index: number;

  shotresult: string;

  constructor() { }

  ngOnInit(): void {
    console.log(` match-result-comp match: ${this.match.shot} ${this.match.received}`)
  }

}
