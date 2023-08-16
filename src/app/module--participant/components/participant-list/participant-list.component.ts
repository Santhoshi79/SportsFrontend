import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, fromEvent } from 'rxjs';
import { ParticipantService } from 'src/app/module--participant/services/participant.service';
import { Participant } from '../../models/Participant';

@Component({
  selector: 'app-participant-list',
  templateUrl: './participant-list.component.html',
  styleUrls: ['./participant-list.component.css']
})
export class ParticipantListComponent implements OnInit {

 dataSource: MatTableDataSource<Participant>= new MatTableDataSource();
  participant:any;
  
  displayedColumns: string[] = ['participantId','participantName','ageGroup.ageGroupName','organization.organizationName','sports.sportsName','actions'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private participantService:ParticipantService,  private router:Router, private snakbar:MatSnackBar) {
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
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  get()
  {
    
    this.participantService.get().subscribe(data =>
      {
        this.dataSource.data = data;
        //this.dataSource.paginator = this.paginator;
        console.log(data);
        this.dataSource.sort = this.sort;
      }
      );
      
  }

  getById(participantId:string)
  {
    this.participantService.getById(participantId).subscribe((data:any) =>{
      this.participant = data;
      console.log(data);
      this.router.navigate(['updateParticipant', participantId]);
    })
  }
  // update(participantId:string)
  // {
  //   this.router.navigate(['updateParticipant', participantId]);
  // }

  deleteParticipant(participantId: string) {
    this.participantService.deleteParticipant(participantId).subscribe((data) => {
      console.log(data);
    }, (error) => {
      this.dataSource.data = this.dataSource.data.filter((element: any) => element.participantId != participantId)
      this.snakbar.open('Deleted successfully', 'Close', {
        duration: 2000
      });
    });
  }
// deleteParticipant(participant: Participant) {
//   if (confirm('Are you sure you want to delete this participant?')) {
//     const index = this.dataSource.data.indexOf(participant);
//     this.dataSource.data.splice(index, 1);
//     this.dataSource._updateChangeSubscription();
//   }
// }
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}

refresh():void{
  window.location.reload();
  this.snakbar.open('Participant deleted', 'Ok', { duration: 2000 });
}

sortData(sort: Sort) {
  const data = this.participant.slice();
  if (!sort.active || sort.direction === '') {
    this.participant = data;
    return;
  }
  this.participant = data.sort((a, b) => {
    const isAsc = sort.direction === 'asc';
    switch (sort.active) {
      case 'participantId': return compare(a.participantID, b.participantID, isAsc);
      case 'participantName': return compare(a.participantName, b.participantName, isAsc);
      case 'ageGroup': return compare(a.ageGroup, b.ageGroup, isAsc);
      case 'category': return compare(a.category, b.category, isAsc);
      case 'organization': return compare(a.organization, b.organization, isAsc);
      case 'sports': return compare(a.sports, b.sports, isAsc);
      default: return 0;
    }
  });
}
}
function compare(a: number | string | Date, b: number | string | Date, isAsc: boolean) {
return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

