import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AgeGroup } from 'src/app/module--participant/models/AgeGroup';
import { Orgnaization } from 'src/app/module--organization/models/Organization';
import { SportsCategory } from 'src/app/module--sports/models/SportsCategory';
import { AgegroupService } from 'src/app/module--participant/services/agegroup.service';
import { OrganizationService } from 'src/app/module--organization/services/organization.service';
import { SportscategoryService } from 'src/app/module--sports/services/sportscategory.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  organization:Orgnaization[];
  ageGroup:AgeGroup[];
  sportscategory:SportsCategory[];

  dataSource1: MatTableDataSource<Orgnaization>= new MatTableDataSource([]);
  dataSource2: MatTableDataSource<AgeGroup>= new MatTableDataSource([]);
  dataSource3: MatTableDataSource<SportsCategory>= new MatTableDataSource([]);;

  displayedColumns1: string[] = ['organizationId','organizationName','averageStudentStrength'];
  displayedColumns2: string[] = ['ageGroupId','ageGroupName'];
  displayedColumns3: string[] = ['categoryId','categoryName'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private organizationService:OrganizationService,private ageGroupService:AgegroupService,
    private sportsCategoryService:SportscategoryService) { 

      this.dataSource1 = new MatTableDataSource();
      this.dataSource2 = new MatTableDataSource();
      this.dataSource3 = new MatTableDataSource();
    }

  ngOnInit(): void {
    this.getOrganization();
    this.getAgeGroup();
    this.getCategories();
  }

  ngAfterViewInit(): void {
    this.dataSource1.sort = this.sort;
    this.dataSource1.paginator = this.paginator;
  }

  getOrganization()
  {
    this.organizationService.get().subscribe(data =>
      {
        this.dataSource1.data = data;
        console.log(data);
      })
  }

  getAgeGroup()
  {
    this.ageGroupService.get().subscribe(data =>{
      this.dataSource2.data=data;
      console.log(data);
    })
  }

  getCategories()
  {
    this.sportsCategoryService.get().subscribe(data =>{
      this.dataSource3.data = data;
      console.log(data);
    })
  }

}
