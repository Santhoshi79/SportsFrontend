import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Orgnaization } from 'src/app/module--organization/models/Organization';


@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  getUrl="http://localhost:8081/api/sports/getOrganization";
  createUrl="http://localhost:8081/api/sports/createOrganization";
  countUrl="http://localhost:8081/api/sports/countOrg";

  constructor(private http:HttpClient) { }

  get():Observable<Orgnaization[]>
  {
    return this.http.get<Orgnaization[]>(`${this.getUrl}`);
  }

  getById(organizationId:number):Observable<any>
  {
    return this.http.get<any>(`${this.getUrl}/${organizationId}`);
  }

  create(organization:Orgnaization):Observable<Object>
  {
    return this.http.post<Object>(`${this.createUrl}`,organization);
  }

  countOrg():Observable<number>
  {
    return this.http.get<number>(`${this.countUrl}`);
  }
}
