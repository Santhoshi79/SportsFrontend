import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AgeGroup } from 'src/app/module--participant/models/AgeGroup';

@Injectable({
  providedIn: 'root'
})
export class AgegroupService {
  getUrl="http://localhost:8081/api/sports/getAgeGroup"

  constructor(private http:HttpClient) { }

  get():Observable<AgeGroup[]>
  {
    return this.http.get<AgeGroup[]>(`${this.getUrl}`);
  }

  getById(ageGroupId:any):Observable<any>
  {
    return this.http.get<any>(`${this.getUrl}/${ageGroupId}`);
  }
}
