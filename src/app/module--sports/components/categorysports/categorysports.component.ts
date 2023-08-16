import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import{HttpClient} from '@angular/common/http'
import { SportsService } from '../../services/sports.service';

@Component({
  selector: 'app-categorysports',
  templateUrl: './categorysports.component.html',
  styleUrls: ['./categorysports.component.css']
})
export class CategorysportsComponent implements OnInit{

  sports:any;
  categoryId:string;

  constructor(private http: HttpClient,private sportsService:SportsService, private route:ActivatedRoute, private router:Router)
  {}
  ngOnInit(): void {
    this.getSports();
  }

  getSports()
  {
    this.categoryId =this.route.snapshot.params['categoryId'];

    this.http.get(`http://localhost:8081/api/sports/category/${this.categoryId}`).subscribe(res =>{
      this.sports = res;
      console.log(res);
    })
    // this.sportsService.getcategoryId(this.categoryId).subscribe( res =>{
    //   this.sports = res;
    //   console.log(res);
    // })

  }





}
