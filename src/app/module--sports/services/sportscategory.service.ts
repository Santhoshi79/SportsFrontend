import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SportsCategory } from 'src/app/module--sports/models/SportsCategory';

@Injectable({
  providedIn: 'root'
})
export class SportscategoryService {

  getUrl="http://localhost:8081/api/sports/getSportsCategory"
  
  constructor(private http:HttpClient) { }

  get():Observable<SportsCategory[]>
  {
    return this.http.get<SportsCategory[]>(`${this.getUrl}`);
  }

  getById(categoryId:string):Observable<any>
  {
    return this.http.get<any>(`${this.getUrl}/${categoryId}`);
  }
}
