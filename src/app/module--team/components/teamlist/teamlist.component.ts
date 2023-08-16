import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { debounceTime, distinctUntilChanged, fromEvent } from 'rxjs';
import { Team } from 'src/app/module--team/models/Team';
import { TeamService } from 'src/app/module--team/services/team.service';


@Component({
  selector: 'app-teamlist',
  templateUrl: './teamlist.component.html',
  styleUrls: ['./teamlist.component.css']
})

export class TeamlistComponent implements OnInit {

  dataSource: MatTableDataSource<Team>= new MatTableDataSource([]);;


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['teamId','teamName','participant.participantName','sports.sportsName','sports.sportsCategory.categoryName'];

  constructor(private teamService:TeamService) {
    this.dataSource = new MatTableDataSource();
    
   }
  ngOnInit(): void {
    this.get();
    fromEvent(document.querySelector('#search') as HTMLInputElement, 'input')
    .pipe(
      debounceTime(300),
      distinctUntilChanged()
    )
    .subscribe(() => {
      const filterValue = (document.querySelector('#search') as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    });
  }
 
  get()
  {
    this.teamService.getTeam().subscribe((data) =>{
      this.dataSource.data = data;
      console.log(data);
    })
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }


}
