import { Pipe, PipeTransform } from '@angular/core';
import { MatchDto } from 'src/app/models/matchdto';

@Pipe({
  name: 'goalDiff',
  //pure: false
})
export class GoalDiffPipe implements PipeTransform {

  transform(matches: MatchDto[], minDiff: number): MatchDto[] {
    const filtered: MatchDto[] = [];
    for(const match of matches){
      if((minDiff <= match.shot-match.received) || (minDiff <= match.received-match.shot)){
        filtered.push(match);
      }else{
      }
    }
    return filtered;

  }

}
