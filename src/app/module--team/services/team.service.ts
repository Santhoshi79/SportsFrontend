import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from 'src/app/module--team/models/Team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  getUrl="http://localhost:8081/api/sports/getTeam";
  constructor(private http:HttpClient) { }

  
  getTeam():Observable<Team[]>
  {
    return this.http.get<Team[]>(`${this.getUrl}`);
  }
}
