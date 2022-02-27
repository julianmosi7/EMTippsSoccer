import { Pipe, PipeTransform } from '@angular/core';
import { MatchDto } from 'src/app/models/matchdto';
import { SingleTippDto } from 'src/app/models/singletippdto';

@Pipe({
  name: 'result'
})
export class ResultPipe implements PipeTransform {

  transform(tr: any): string {
    if(tr.shot == null){
      return ":";
    }else{
      return `${tr.shot}:${tr.received}`
    }
    
  }

}
