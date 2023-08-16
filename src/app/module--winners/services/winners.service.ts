import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Winners } from '../models/Winners';

@Injectable({
  providedIn: 'root'
})
export class WinnersService {

  getUrl="http://localhost:8081/api/sports/getWinners";


  constructor( private http:HttpClient) { }

  getWinners():Observable<Winners[]>
  {
     return this.http.get<Winners[]>(`${this.getUrl}`);
  }

  getWinnersByYear(id:number):Observable<any>
  {
    return this.http.get<any>(`${this.getUrl}/${id}`);
  }
}
