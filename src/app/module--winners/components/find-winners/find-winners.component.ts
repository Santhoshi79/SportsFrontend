import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { WinnersService } from 'src/app/module--winners/services/winners.service';

@Component({
  selector: 'app-find-winners',
  templateUrl: './find-winners.component.html',
  styleUrls: ['./find-winners.component.css']
})
export class FindWinnersComponent implements OnInit {
 
  searchForm:FormGroup;
  winners:any;

  constructor(private winnersService:WinnersService , private snackbar:MatSnackBar)
  {
     this.searchForm = new FormGroup({
      year:new FormControl('',[Validators.required])
     })
  }
 
  ngOnInit(): void {
   
  }

  getByYear(year)
  {
    this.winnersService.getWinnersByYear(year).subscribe((res:any) =>{
      this.winners = res;
      console.log(res);
    },
    
    error =>{
      console.log("errror:Data not found");
      this.snackbar.open('Year'+year+" not found",'close',{
        duration:2000,
        verticalPosition:'top'
      })
    })
  }
  

}
