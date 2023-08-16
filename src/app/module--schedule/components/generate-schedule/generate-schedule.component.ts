import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Fixture } from 'src/app/module--schedule/models/schedule';
import { EventService } from 'src/app/module--schedule/services/event.service';
import { SportsService } from 'src/app/module--sports/services/sports.service';
import { TeamService } from 'src/app/module--team/services/team.service';
import { ScheduleService } from 'src/app/module--schedule/services/schedule.service';

@Component({
  selector: 'app-generate-schedule',
  templateUrl: './generate-schedule.component.html',
  styleUrls: ['./generate-schedule.component.css']
})
export class GenerateScheduleComponent implements OnInit{
  
  participants:any;
sports:any;
team:any;
event:any;
  fixture:any;

  firstFormGroup = this._formBuilder.group({
    eventId: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    sportsId: ['', Validators.required],
  });

  thirdFormGroup = this._formBuilder.group({
    team1: ['', Validators.required],
    team2: ['', Validators.required],
  });

  fourthFormGroup = this._formBuilder.group({
    venue:['',Validators.required],
    dateTime:['', Validators.required]
  })
 

  isLinear = false;


  constructor(private fixtureService:ScheduleService, private _formBuilder:FormBuilder,
    private teamService:TeamService, private sportsService:SportsService,
    private eventService:EventService, private matSnackbar:MatSnackBar, private http:HttpClient)
  {}
  ngOnInit(): void {
    
    this.getSports();
    this.getTeam();
    this.getEvent();
    //this.getGroupedParticipants();
  }


  getSports()
  {
    this.sportsService.get().subscribe( res =>{
      this.sports = res;
      console.log(res);
    })
  }

  getTeam()

  {
    this.teamService.getTeam().subscribe( res =>{
      this.team = res;
      console.log(res);
    })
  }

  getEvent()
  {
    this.eventService.get().subscribe( res =>{
      this.event = res;
      console.log(res);
    })
  }
  onSubmit()
  {
    console.log(this.fourthFormGroup.value)
    console.log(this.firstFormGroup.value)
    console.log(this.secondFormGroup.value)
    console.log(this.thirdFormGroup.value)
    // this.fixture  = {
    //   fixtureId: 0,
    //   event: {
    //     eventId: this.firstFormGroup.value.eventId,
    //     eventName: this.event.find(eve => eve.eventId === this.firstFormGroup.value.eventId).eventName,
    //     sportsCategory: {
    //       categoryId: this.event.find(eve => eve.eventId === this.firstFormGroup.value.eventId).sportsCategoryId,
    //       categoryName: this.event.find(eve => eve.eventId === this.firstFormGroup.value.eventId).sportsCategoryName,
    //     },
    //     startTime: this.event.find(eve => eve.eventId === this.firstFormGroup.value.eventId).startTime,
    //     endTime: this.event.find(eve => eve.eventId === this.firstFormGroup.value.eventId).endTime
    //   },
    //   sports: {
    //     sportsId: this.secondFormGroup.value.sportsId,
    //     sportsName: this.sports.find(spo => spo.sportsId === this.secondFormGroup.value.sportsId).sportsName,
    //     sportsCategory: {
    //       categoryId: this.sports.find(spo => spo.sportsId === this.secondFormGroup.value.sportsId).sportsCategoryId,
    //       categoryName: this.sports.find(spo => spo.sportsId === this.secondFormGroup.value.sportsId).sportsCategoryName
    //     },
    //     minAgeGroupId: {
    //       ageGroupId: this.sports.find(spo => spo.sportsId === this.secondFormGroup.value.sportsId).ageGroupId,
    //       ageGroupName: this.sports.find(spo => spo.sportsId === this.secondFormGroup.value.sportsId).ageGroupName
    //     },
    //     maxAgeGroupId: {
    //       ageGroupId: this.sports.find(spo => spo.sportsId === this.secondFormGroup.value.sportsId).ageGroupId,
    //       ageGroupName: this.sports.find(spo => spo.sportsId === this.secondFormGroup.value.sportsId).ageGroupName
    //     },
    //     maxParticipants: this.sports.find(spo => spo.sportsId === this.secondFormGroup.value.sportsId).maxParticipants
    //   },
    //   team1Id: {
    //     teamId: this.thirdFormGroup.value.team1,
    //     teamName: this.team.find( t => t.teamId === this.thirdFormGroup.value.team1).teamName,
    //     sports: {
    //       sportsId: this.team.find( t => t.teamId === this.thirdFormGroup.value.team1).sportsId,
    //       sportsName: this.team.find( t => t.teamId === this.thirdFormGroup.value.team1).sportsName,
    //       sportsCategory: {
    //         categoryId: this.team.find( t => t.teamId === this.thirdFormGroup.value.team1).sportsCategoryId,
    //         categoryName: this.team.find( t => t.teamId === this.thirdFormGroup.value.team1).sportsCategoryName
    //       },
    //       minAgeGroupId: {
    //         ageGroupId: this.team.find( t => t.teamId === this.thirdFormGroup.value.team1).ageGroupId,
    //         ageGroupName: this.team.find( t => t.teamId === this.thirdFormGroup.value.team1).ageGroupName
    //       },
    //       maxAgeGroupId: {
    //         ageGroupId: this.team.find( t => t.teamId === this.thirdFormGroup.value.team1).ageGroupId,
    //         ageGroupName: this.team.find( t => t.teamId === this.thirdFormGroup.value.team1).ageGroupName
    //       },
    //       maxParticipants: this.team.find( t => t.teamId === this.thirdFormGroup.value.team1).maxParticipants
    //     },
    //     participant: {
    //       participantId: this.team.find( t => t.teamId === this.thirdFormGroup.value.team1).participantId,
    //       participantName: this.team.find( t => t.teamId === this.thirdFormGroup.value.team1).participantName,
    //       sportsCategoryId: {
    //         categoryId: this.team.find( t => t.teamId === this.thirdFormGroup.value.team1).categoryId,
    //         categoryName: this.team.find( t => t.teamId === this.thirdFormGroup.value.team1).categoryName
    //       },
    //       ageGroupId: {
    //         ageGroupId:this.team.find( t => t.teamId === this.thirdFormGroup.value.team1).ageGroupId,
    //         ageGroupName: this.team.find( t => t.teamId === this.thirdFormGroup.value.team1).ageGroupName
    //       },
    //       organizationId: {
    //         organizationId: this.team.find( t => t.teamId === this.thirdFormGroup.value.team1).organizationId,
    //         organizationName: this.team.find( t => t.teamId === this.thirdFormGroup.value.team1).organizationName
    //       }
    //     }
    //   },
    //   team2Id: {
    //     teamId: this.thirdFormGroup.value.team2,
    //     teamName: this.team.find( t => t.teamId === this.thirdFormGroup.value.team2).teamName,
    //     sports: {
    //       sportsId: this.team.find( t => t.teamId === this.thirdFormGroup.value.team2).sportsId,
    //       sportsName: this.team.find( t => t.teamId === this.thirdFormGroup.value.team2).sportsName,
    //       sportsCategory: {
    //         categoryId: this.team.find( t => t.teamId === this.thirdFormGroup.value.team2).sportsCategoryId,
    //         categoryName: this.team.find( t => t.teamId === this.thirdFormGroup.value.team2).sportsCategoryName
    //       },
    //       minAgeGroupId: {
    //         ageGroupId: this.team.find( t => t.teamId === this.thirdFormGroup.value.team2).ageGroupId,
    //         ageGroupName: this.team.find( t => t.teamId === this.thirdFormGroup.value.team2).ageGroupName
    //       },
    //       maxAgeGroupId: {
    //         ageGroupId: this.team.find( t => t.teamId === this.thirdFormGroup.value.team2).ageGroupId,
    //         ageGroupName: this.team.find( t => t.teamId === this.thirdFormGroup.value.team2).ageGroupName
    //       },
    //       maxParticipants: this.team.find( t => t.teamId === this.thirdFormGroup.value.team2).maxParticipants
    //     },
    //     participant: {
    //       participantId: this.team.find( t => t.teamId === this.thirdFormGroup.value.team2).participantId,
    //       participantName: this.team.find( t => t.teamId === this.thirdFormGroup.value.team2).participantName,
    //       sportsCategoryId: {
    //         categoryId: this.team.find( t => t.teamId === this.thirdFormGroup.value.team2).categoryId,
    //         categoryName: this.team.find( t => t.teamId === this.thirdFormGroup.value.team2).categoryName
    //       },
    //       ageGroupId: {
    //         ageGroupId:this.team.find( t => t.teamId === this.thirdFormGroup.value.team2).ageGroupId,
    //         ageGroupName: this.team.find( t => t.teamId === this.thirdFormGroup.value.team2).ageGroupName
    //       },
    //       organizationId: {
    //         organizationId: this.team.find( t => t.teamId === this.thirdFormGroup.value.team2).organizationId,
    //         organizationName: this.team.find( t => t.teamId === this.thirdFormGroup.value.team2).organizationName
    //       }
    //     }
    //   },
    //   venue: this.fourthFormGroup.value.venue,
    //   dateTime: this.fourthFormGroup.value.dateTime
    // };

    this.fixture = {
      fixtureId:0,
      event: {eventId:this.firstFormGroup.value.eventId},
      sports: {sportsId:this.secondFormGroup.value.sportsId},
      team2Id: { teamId: this.thirdFormGroup.value.team1 },
      team1Id: { teamId: this.thirdFormGroup.value.team2 },
      venue: this.fourthFormGroup.value.venue,
      dateTime: this.fourthFormGroup.value.dateTime
    };
    
    

    this.http.post('http://localhost:8081/api/sports/createFixture',this.fixture).subscribe({
      next:(data)=>{
        console.log(data);
        this.matSnackbar.open('Schedule generated Successfully', '', {
          duration: 3000, 
        });
      }
    })
    
    // this.fixtureService.create(this.fixture).subscribe({
    //   next:(data)=>{
    //     console.log(data);
    //     this.matSnackbar.open('Schedule generated Successfully', '', {
    //       duration: 3000, 
    //     });
    //   }
    // })
  }

  // getGroupedParticipants()
  // {
  //   this.http.get(`http://localhost:8081/api/sports/groupedParticipant`).subscribe( res =>{
  //     this.participants = res;
  //     console.log(res);
  //   })
  // }
}
