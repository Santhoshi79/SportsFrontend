import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ParticipantService } from 'src/app/module--participant/services/participant.service';

@Component({
  selector: 'app-find-participant',
  templateUrl: './find-participant.component.html',
  styleUrls: ['./find-participant.component.css']
})
export class FindParticipantComponent implements OnInit {

  searchForm !:FormGroup;
  participant:any;

  
  // @Input() part: Participant;
  
  constructor(private participantService:ParticipantService, private snackbar:MatSnackBar) {
    this.searchForm = new FormGroup({
      participantId: new FormControl('',[Validators.required])
   })
  }

  ngOnInit(): void {
  }

  getById(participantId)
  {
    this.participantService.getById(participantId).subscribe(data=>
      {
        this.participant = data;
        console.log(data);
        // data.forEach(element => {
        //   console.log(element);

        // });
      },
      error => {
        console.log("Error: Data not found.");
        //alert('Participant '+participantId+' not found Please Provide the Valid ParticipantId');
        this.snackbar.open('Participant '+participantId+' not found Please Provide the Valid Paritcipant Id', 'Close', {
          duration: 2000,
          verticalPosition: 'top'
        });
      })
  }


}
  


