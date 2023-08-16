import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

   getUrl = "http://localhost:8081/api/sports/getEvent";
  constructor(private http:HttpClient) { }

  get():Observable<Event[]>
  {
    return this.http.get<Event[]>(`${this.getUrl}`);
  }
  
}
