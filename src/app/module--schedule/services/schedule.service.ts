import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fixture } from '../models/schedule';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  getUrl = "http://localhost:8081/api/sports/getFixture"
  createUrl="http://localhost:8081/api/sports/createFixture"
  
  constructor(private http:HttpClient) { }

  get():Observable<Fixture[]>
  {
    return this.http.get<Fixture[]>(this.getUrl);
  }

  getById(fixtureId:number):Observable<any>
  {
    return this.http.get<any>(`${this.getUrl}/${fixtureId}`);
  }

  create(fixture:Fixture):Observable<Object>
  {
    return this.http.post(`${this.createUrl}`,fixture);
  }
}
