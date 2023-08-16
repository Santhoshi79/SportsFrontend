import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ScheduleService } from 'src/app/module--schedule/services/schedule.service';

@Component({
  selector: 'app-find-fixture',
  templateUrl: './find-fixture.component.html',
  styleUrls: ['./find-fixture.component.css']
})
export class FindFixtureComponent implements OnInit {

  searchForm !:FormGroup;
  fixture:any;


  constructor(private fixtureService:ScheduleService, private snackbar:MatSnackBar) { 
    this.searchForm = new FormGroup({
      fixtureId: new FormControl('',[Validators.required])
   })
  }

  ngOnInit(): void {
  }

  
  getByFixtureId(fixtureId) {
    this.searchForm.get('fixtureId')?.value;
    this.fixtureService.getById(fixtureId).subscribe(data => {
      this.fixture = data;
      console.log(data);
    },
    error => {
      console.log("Error: Data not found.");
      this.snackbar.open('Fixture Id: '+fixtureId+' not found Please Provide the Valid FixtureId', 'Close', {
        duration: 2000,
        verticalPosition: 'top'
      });
    });
  }

}
