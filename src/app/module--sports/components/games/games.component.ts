import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Sports } from 'src/app/module--sports/models/Sports';
import { SportsCategory } from 'src/app/module--sports/models/SportsCategory';
import { SportsService } from 'src/app/module--sports/services/sports.service';
import { SportscategoryService } from 'src/app/module--sports/services/sportscategory.service';


@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  sports:Sports[];
  categories:SportsCategory[];
  cats:any;

  constructor(private sportService:SportsService, private category:SportscategoryService, private router:Router) { }

  ngOnInit(): void {
    this.sportService.get().subscribe((data) => {
      this.sports = data;
    });

    this.getCategory();
  }

  getCategory()
  {
    this.category.get().subscribe((res) =>{
      this.categories = res;
      console.log(res);

    })
  }

  getCategoryById(categoryId:string)
  {
    this.category.getById(categoryId).subscribe((res) =>{
      this.cats = res;
      console.log(res);
      this.router.navigate(['categorysports',categoryId]);
    })
  }
 
 
}
















 // openDialog1() {
  //   const dialogRef = this.dialog.open(IndividualComponent);

  //   dialogRef.afterClosed().subscribe(result => {
  //     this.dialog.open(IndividualComponent, {panelClass: 'full-width-dialog'})
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }

  // openDialog2() {
  //   const dialogRef = this.dialog.open(DualComponent);

  //   dialogRef.afterClosed().subscribe(result => {
  //     this.dialog.open(DualComponent, {panelClass: 'full-width-dialog'})
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }

  // openDialog3() {
  //   const dialogRef = this.dialog.open(TeamComponent);

  //   dialogRef.afterClosed().subscribe(result => {
     
  //     console.log(`Dialog result: ${result}`);
  //     const dialogConfig = new MatDialogConfig();
  //     dialogConfig.maxWidth = '1800px'; // Set the maximum width of the dialog box
  //     dialogConfig.maxHeight = '1600px'; // Set the maximum height of the dialog box
  //     this.dialog.open(TeamComponent,dialogConfig)
  //   });
  // }