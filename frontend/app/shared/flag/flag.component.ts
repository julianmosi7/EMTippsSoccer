import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'flag',
  templateUrl: './flag.component.html',
  styleUrls: ['./flag.component.scss']
})
export class FlagComponent implements OnInit {
  @Input() countryName: string;
  phocaId = '';

  constructor() { }

  ngOnInit(): void {
    if (this.countryName === 'Ger')
      this.phocaId = 'de';
    else if (this.countryName === 'Ita')
      this.phocaId = 'it';
    else if (this.countryName === 'Tur')
      this.phocaId = 'tr';
    else if (this.countryName === 'Wal')
      this.phocaId = 'wales';
    else if (this.countryName === 'Sui')
      this.phocaId = 'ch';
    else if (this.countryName === 'Den')
      this.phocaId = 'dk';
    else if (this.countryName === 'Fin')
      this.phocaId = 'fi';
    else if (this.countryName === 'Bel')
      this.phocaId = 'be';
    else if (this.countryName === 'Rus')
      this.phocaId = 'ru';
    else if (this.countryName === 'Eng')
      this.phocaId = 'england';
    else if (this.countryName === 'Cro')
      this.phocaId = 'hr';
    else if (this.countryName === 'Aut')
      this.phocaId = 'at';
    else if (this.countryName === 'Geo')
      this.phocaId = 'ge';
    else if (this.countryName === 'Ned')
      this.phocaId = 'nl';
    else if (this.countryName === 'Ukr')
      this.phocaId = 'ua';
    else if (this.countryName === 'Srb')
      this.phocaId = 'cs';
    else if (this.countryName === 'Cze')
      this.phocaId = 'cz';
    else if (this.countryName === 'Pol')
      this.phocaId = 'pl';
    else if (this.countryName === 'Irl')
      this.phocaId = 'ie';
    else if (this.countryName === 'Esp')
      this.phocaId = 'es';
    else if (this.countryName === 'Swe')
      this.phocaId = 'se';
    else if (this.countryName === 'Hun')
      this.phocaId = 'hu';
    else if (this.countryName === 'Por')
      this.phocaId = 'pt';
    else if (this.countryName === 'Fra')
      this.phocaId = 'fr';
  }

}
