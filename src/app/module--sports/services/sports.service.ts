import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sports } from 'src/app/module--sports/models/Sports';


@Injectable({
  providedIn: 'root'
})
export class SportsService {

  getUrl="http://localhost:8081/api/sports/getSports"
  getCatUrl:"http://localhost:8081/api/sports/category"
  constructor(private http:HttpClient) { }

  get():Observable<Sports[]>
  {
    return this.http.get<Sports[]>(`${this.getUrl}`);
  }

  getById(sportsId:number):Observable<any>
  {
    return this.http.get<any>(`${this.getUrl}/${sportsId}`);
  }

  getcategoryId(categoryId:string):Observable<any>
  {
    return this.http.get<any>(`${this.getCatUrl}/${categoryId}`);
  }
}
