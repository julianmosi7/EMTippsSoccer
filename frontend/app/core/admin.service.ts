import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MatchDto } from '../models/matchdto';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  url = "http://localhost:5000/TipsAdmin/UpdateMatchResult"

  constructor(private http: HttpClient) { }

  updateMatch(gameid: number, scored: number, received: number): Observable<MatchDto>{
    return this.http.put<MatchDto>(`${this.url}/${gameid}`, {"scored": scored, "received": received});
  }
}
