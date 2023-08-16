import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-generate-team',
  templateUrl: './generate-team.component.html',
  styleUrls: ['./generate-team.component.css']
})
export class GenerateTeamComponent implements OnInit{

  team:any;

  ngOnInit(): void {
   this.getTeams()
  }
 constructor(private http:HttpClient)
 {}

  getTeams()
  {
    this.http.get(`http://localhost:8081/api/sports/getTeam`).subscribe( res =>{
      this.team=res;
      console.log(res);
    })
  }

  generateTeam()
  {
    this.http.post(`http://localhost:8081/api/sports/generateTeam`, { argument: 1 }).subscribe({
      next:(data) =>{
        console.log(data);
        alert('Generated Schedule SucessFully');
      }
    })
  }
}
