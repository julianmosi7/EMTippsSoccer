import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MatchDto } from '../models/matchdto';
import { TippDto } from '../models/tippdto';
import { TipperDto } from '../models/tipperdto';

@Injectable({
  providedIn: 'root'
})
export class TippsService {
  url = 'http://localhost:5000/Tips';

  constructor(private http: HttpClient) { }

  getAllTippers(): Observable<TipperDto[]>{
    return this.http.get<TipperDto[]>(`${this.url}/TipperNames`);
  }

  getMatchResults(): Observable<MatchDto[]>{
    return this.http.get<MatchDto[]>(`${this.url}/MatchResults`);
  }

  getTipp(tipperId: number): Observable<TippDto>{
    return this.http.get<TippDto>(`${this.url}/Tipps/${tipperId}`)
  }

}
