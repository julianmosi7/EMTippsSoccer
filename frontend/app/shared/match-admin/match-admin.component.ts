import { Component, Input, OnInit } from '@angular/core';
import { MatchDto } from 'src/app/models/matchdto';

@Component({
  selector: '[match-admin]',
  templateUrl: './match-admin.component.html',
  styleUrls: ['./match-admin.component.scss']
})
export class MatchAdminComponent implements OnInit {
  @Input() match: MatchDto;
  @Input() index: number;

  shotresult: string;
  
  constructor() { }

  ngOnInit(): void {
  
  }

}
