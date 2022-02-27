import { Pipe, PipeTransform } from '@angular/core';
import { TipperDto } from 'src/app/models/tipperdto';

@Pipe({
  name: 'filterByGroup'
})
export class FilterByGroupPipe implements PipeTransform {

  transform(tippers: TipperDto[], selectedGroup: string): TipperDto[] {
    const filtered: TipperDto[] = [];
    for (const tipper of tippers) {
        if(tipper.groups.includes(selectedGroup) && selectedGroup != ""){
          filtered.push(tipper);
        }else if(selectedGroup == "Alle" && tipper.groups != ""){
          filtered.push(tipper);
        }
    }
    return filtered;
  }

}
