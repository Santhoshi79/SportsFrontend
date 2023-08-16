import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Participant } from '../models/Participant';


@Injectable({
  providedIn: 'root'
})
export class ParticipantService {

  createUrl="http://localhost:8081/api/sports/createParticipant";
  getUrl="http://localhost:8081/api/sports/getParticipants";
  updateUrl="http://localhost:8081/api/sports/updateParticipants";
  deleteUrl="http://localhost:8081/api/sports/deleteParticipants";

  countUrl="http://localhost:8081/api/sports/count";


  constructor(private http:HttpClient) { }


  get():Observable<Participant[]>
  {
    return this.http.get<Participant[]>(`${this.getUrl}`);
  }

  create(participant:Participant):Observable<Object>
  {
    return this.http.post(`${this.createUrl}`,participant);
  }

  getById(participantId:string):Observable<any>
  {
    return this.http.get<any>(`${this.getUrl}/${participantId}`);
  }

  update(participantId:string,participant:Participant):Observable<object>
  {
    return this.http.put(`${this.updateUrl}/${participantId}`,participant);
  }

  deleteParticipant(participantId:string):Observable<void>
  {
    return this.http.delete<void>(`${this.deleteUrl}/${participantId}`);
  }

  countParticipants():Observable<number>
  {
    return this.http.get<number>(`${this.countUrl}`);
  }

}
