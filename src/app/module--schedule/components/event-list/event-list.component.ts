import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { debounceTime, distinctUntilChanged, fromEvent } from 'rxjs';
import { EventService } from 'src/app/module--schedule/services/event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {


  dataSource: MatTableDataSource<Event>= new MatTableDataSource([]);

  displayedColumns: string[] = ['eventId','eventName','startTime','endTime'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private eventService:EventService) { 
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

  ngAfterViewInit(): void {
    //this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  get()
  {
    this.eventService.get().subscribe((data) =>{
      this.dataSource.data = data;
      this.dataSource.sort = this.sort;
      console.log(data);
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
