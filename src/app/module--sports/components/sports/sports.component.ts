import { Component, OnInit } from '@angular/core';
import { Sports } from 'src/app/module--sports/models/Sports';
import { SportsService } from 'src/app/module--sports/services/sports.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {
  sports:Sports[];

  constructor(private sportService:SportsService) { }

  ngOnInit(): void {
    this.sportService.get().subscribe(data =>{
      this.sports = data;
      console.log(data);
    });
  }

}
