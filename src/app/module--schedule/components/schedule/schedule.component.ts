import { Component, OnInit, ViewChild } from '@angular/core';
import { Fixture } from 'src/app/module--schedule/models/schedule';
import { ScheduleService } from 'src/app/module--schedule/services/schedule.service';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree'
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';



@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})

export class ScheduleComponent implements OnInit {

  dataSource: MatTableDataSource<Fixture>;

  displayedColumns: string[] = ['fixtureId', 'event.eventName', 'sports.sportsName', 'team1Id.teamName', 'team2Id.teamName', 'venue', 'dateTime'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
   @ViewChild(MatSort) sort!:MatSort;
  constructor(private fixtureService:ScheduleService)
  {
    this.dataSource = new MatTableDataSource();
   }
  ngOnInit(): void {
    this.get();
  }
  
  get()
  {
    this.fixtureService.get().subscribe(data =>
      {
        this.dataSource.data = data;
        this.dataSource.paginator = this.paginator;
        console.log(data);
      }
      );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  
}
