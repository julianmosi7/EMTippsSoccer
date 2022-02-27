import { Component, OnInit } from '@angular/core';
import { TippsService } from 'src/app/core/tipps.service';
import { SingleTippDto } from 'src/app/models/singletippdto';
import { TippDto } from 'src/app/models/tippdto';
import { TipperDto } from 'src/app/models/tipperdto';

@Component({
  selector: 'app-tipper-overview',
  templateUrl: './tipper-overview.component.html',
  styleUrls: ['./tipper-overview.component.scss']
})
export class TipperOverviewComponent implements OnInit {
  btnGroups: String[] = [];
  btnGroupsDist: String[] = ["Alle"];
  selectedGroup: string;
  tippers: TipperDto[] = [];
  spl: String[];

  tipperName: string;
  tipperId: number;

  tipp: TippDto;
  singleTipps: SingleTippDto[] = [];
  
  constructor(private tippsService: TippsService) { }

  ngOnInit(): void {
    const unique = (value, index, self) => {
      return self.indexOf(value) === index;
    }

    this.tippsService.getAllTippers()
    .subscribe(x => {
      this.tippers = x;
      this.btnGroups = this.tippers.map(x => x.groups);
      this.btnGroups.forEach(x => {
        if(x != ""){
          this.spl = x.split(",");
          this.spl.forEach(x => this.btnGroupsDist.push(x));
        }
      });
      this.btnGroupsDist = this.btnGroupsDist.filter(unique);
    });
  }

  buttonClicked(selectedGroup: string): void {
      console.log(`buttonClicked ${selectedGroup}`);
      this.selectedGroup = selectedGroup;
  }

  selectedTipper(tipper: TipperDto): void{
    console.log(`tipper: ${tipper}`);
    this.tipperName = tipper.name;
    this.tipperId = tipper.id;

    this.tippsService.getTipp(this.tipperId)
    .subscribe(x => {
        this.tipp = x;
        this.singleTipps = this.tipp.tipps;
    });
  }

}