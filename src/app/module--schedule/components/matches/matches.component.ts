import { Component, OnInit } from '@angular/core';
import { Fixture } from 'src/app/module--schedule/models/schedule';
import { ScheduleService } from 'src/app/module--schedule/services/schedule.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  match:any;
 // fixtureId:number;

  constructor(public  fixtureService: ScheduleService) { }

  ngOnInit(): void {
    this.getFixture();
  }

  getFixture()
  {
    this.fixtureService.get().subscribe(data =>{
      this.match = data;
      console.log(data);
    })
  }

  getFixtureById(fixtureId)
  {
    this.fixtureService.getById(fixtureId).subscribe((data:any) =>{
      this.match = data;
      console.log(data);
      
      const fixtureData =this.match.map(f => `${f.team1Id.participant.participantName} vs ${f.team2Id.participant.participantName} on ${f.event.startTime} at ${f.venue}` ).join('\n');
    const subject = 'Upcoming fixtures';
    const body = `Here are the upcoming fixtures:\n\n${fixtureData}`;
    const mailtoLink = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;

     
    })
  }

  shareFixture() {
  
    // const fixtureData = this.match.map(f => `${f.event.eventName} \n ${f.team1Id.participant.participantName} vs ${f.team2Id.participant.participantName} \n Time:${f.event.startTime} \n venue: ${f.venue}` ).join('\n\n');
    // const subject = 'Upcoming Sports Event';
    // const thanksMessage = "Thanks and Regards, \nFalconSportsClub";
    // const body = `Hi,\nI hope this email finds you well. As a member of the Falcon Sports Club, I'm excited to share with you the upcoming fixtures for our various sports programs.Here are the upcoming fixtures:\n\n${fixtureData}\n\n${thanksMessage}`;
    // const mailtoLink = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    // window.location.href = mailtoLink;

    const fixtureData =this.match.map(f => `\n${f.event.eventName}\n ${f.team1Id.participant.participantName} vs ${f.team2Id.participant.participantName} \n Time:${f.event.startTime}\n venue: ${f.venue}` ).join('\n');
    const subject = 'Upcoming Sports Event';
    const thanksMessage = "Thanks and Regards\nFalconSportsClub";
    const body = `Hi,\nI hope this email finds you well. As a member of the Falcon Sports Club, I'm excited to share with you the upcoming fixtures for our various sports programs.Here are the upcoming fixtures:\n${fixtureData}\n\n${thanksMessage}`;
    const mailtoLink = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;

  }

}
