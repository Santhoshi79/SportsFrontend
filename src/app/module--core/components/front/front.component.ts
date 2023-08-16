import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Winners } from 'src/app/module--winners/models/Winners';
import { OrganizationService } from 'src/app/module--organization/services/organization.service';
import { ParticipantService } from 'src/app/module--participant/services/participant.service';
import { WinnersService } from 'src/app/module--winners/services/winners.service';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FrontComponent implements OnInit {

  dataSource: MatTableDataSource<Winners>= new MatTableDataSource();
  participant:any;
  
  displayedColumns: string[] = ['winner','year','totalGames','points','image'];

  countParticipant:number;
  countOrg:number;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private participantService:ParticipantService , private organizationService:OrganizationService
    ,private winnersService:WinnersService) { }

  ngOnInit(): void {
    this.participantService.countParticipants().subscribe(count => this.countParticipant = count,
      );
      this.organizationService.countOrg().subscribe(count => this.countOrg=count );

      this.getWinners();
      this.dataSource = new MatTableDataSource();
  }

  getWinners()
  {
    this.winnersService.getWinners().subscribe((res) =>{
      this.dataSource.data = res;
      console.log(res);
    })
  }

  ngAfterViewInit(): void {
    
    this.dataSource.paginator = this.paginator;
  }



}
