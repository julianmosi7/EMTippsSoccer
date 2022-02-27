import { SingleTippDto } from './singletippdto';
export class TippDto {
  tipperId: number;
  tipperName: string;
  p: number;
  tipsexact: number;
  tips12x: number;
  tipps: SingleTippDto[];
}
