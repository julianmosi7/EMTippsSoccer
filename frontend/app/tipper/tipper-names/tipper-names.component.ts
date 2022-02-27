import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { TippsService } from 'src/app/core/tipps.service';
import { TipperDto } from 'src/app/models/tipperdto';

@Component({
  selector: 'tipper-names',
  templateUrl: './tipper-names.component.html',
  styleUrls: ['./tipper-names.component.scss']
})
export class TipperNamesComponent implements OnInit {
  @Input() tippers: TipperDto[];
  @Input() selectedGroup: string;

  @Output() tipperIdSelected = new EventEmitter<TipperDto>();

  constructor() { }

  ngOnInit(): void {
    
  }

  selectedTipperComponent(tipper: TipperDto): void{
      console.log(`tipperComp: ${tipper.name}`);
      this.tipperIdSelected.emit(tipper);
  }

}
