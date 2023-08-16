import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AgeGroup } from 'src/app/module--participant/models/AgeGroup';
import { Orgnaization } from 'src/app/module--organization/models/Organization';
import { Sports } from 'src/app/module--sports/models/Sports';
import { SportsCategory } from 'src/app/module--sports/models/SportsCategory';
import { AgegroupService } from 'src/app/module--participant/services/agegroup.service';
import { OrganizationService } from 'src/app/module--organization/services/organization.service';
import { SportsService } from 'src/app/module--sports/services/sports.service';
import { SportscategoryService } from 'src/app/module--sports/services/sportscategory.service';
import { ParticipantService } from 'src/app/module--participant/services/participant.service';

@Component({
  selector: 'app-update-participant',
  templateUrl: './update-participant.component.html',
  styleUrls: ['./update-participant.component.css']
})
export class UpdateParticipantComponent implements OnInit {

  participantId:string;
 // participant:Participant = new Participant();
  participantForm :FormGroup;

  sportsCategories: SportsCategory[] = [];
  sports: Sports[] = [];
  ageGroups: AgeGroup[] = [];
  organization:Orgnaization[] =[];
 // participant:Participant;

  //participant = new Participant();
  ageGroup = new AgeGroup();
  organizations = new Orgnaization();
  sport = new Sports();
  cat = new SportsCategory();

  participant ={
    participantId: '',
    participantName: '',
    ageGroup: {
      ageGroupId: '',
      ageGroupName: ''
    },
    organization: {
      organizationId: '',
      organizationName: '',
      averageStudentStrength: 0
    },
   sports: {
      sportsId: '',
      sportsName: '',
      sportsCategory: {
        categoryId: '',
        categoryName: '',
      },
    
      maxParticipants: 0,
    } 
  };

  constructor(private participantService:ParticipantService, private route:ActivatedRoute, private router:Router,
   private fb:FormBuilder,
   private ageGroupService:AgegroupService,
   private organizationService:OrganizationService,
   private sportCategoryService:SportscategoryService,
   private sportsService:SportsService,
   public http:HttpClient,
   private snackBar:MatSnackBar) { }

  ngOnInit(): void {

    this.participantForm = this.fb.group({
      participantId: ['', Validators.required],
      participantName: ['', [Validators.required,Validators.pattern(/^[a-zA-Z\s]+$/)]],
      categoryId: ['', Validators.required],
      sportsId: ['', Validators.required],
      ageGroupId: ['', Validators.required],
      organizationId:['',Validators.required]
    });

    this.getById();
    this.getAge();
    // this.getById();
    this.getCategories();
    this.getOrganization();
    this.getSports();

    this.participantId = this.route.snapshot.params['participantId'];
    this.participantService.getById(this.participantId).subscribe({
      next: (data) => {
        this.participant = data;
        this.participantForm.patchValue({
          participantId: this.participant.participantId,
          participantName: this.participant.participantName,
          categoryId: this.participant.sports.sportsCategory.categoryId,
          sportsId: this.participant.sports.sportsId,
          ageGroupId: this.participant.ageGroup.ageGroupId,
          organizationId: this.participant.organization.organizationId
        });
      },
      error: (e) => {
        console.log(e);
      }
    });
  }


  private getById()
  {
    this.participantId = this.route.snapshot.params['participantId'];
    this.participantService.getById(this.participantId).subscribe({
      next:(data)=>
      {
        this.participant=data;
      },
      error:(e)=>{
        console.log(e);
      }
    });
  }

  // updateEmp()
  // {
  //   this.participantService.update(this.participantId,this.participant).subscribe({
  //     next:(data)=>{
  //       console.log(data);
  //       this.redirectList();
  //     },
  //     error:(e)=>{
  //       console.log(e);
  //     }
  //   });
  // }

  redirectList()
  {
    this.router.navigate(['/participantList']);
  }

  onSubmit()
  {
    console.log(this.participant);
    console.log(this.participantForm.value);
    this.participant = {
      participantId: this.participantForm.value.participantId,
      participantName: this.participantForm.value.participantName,
      ageGroup: {
        ageGroupId: this.participantForm.value.ageGroupId,
        ageGroupName: this.ageGroups.find(ag => ag.ageGroupId === this.participantForm.value.ageGroupId).ageGroupName 
      },
      organization: {
        organizationId: this.participantForm.value.organizationId,
        organizationName: this.organization.find(org => org.organizationId === this.participantForm.value.organizationId).organizationName,
        averageStudentStrength: this.organization.find(org => org.organizationId === this.participantForm.value.organizationId).averageStudentStrength
      },
      sports: {
        sportsId: this.participantForm.value.sportsId,
        sportsName: this.sports.find(sp => sp.sportsId === this.participantForm.value.sportsId).sportsName,
        sportsCategory: {
          categoryId: this.participantForm.value.categoryId,
          categoryName: this.sportsCategories.find(sc => sc.categoryId === this.participantForm.value.categoryId).categoryName,
        },
        maxParticipants:  this.sports.find(sp => sp.sportsId === this.participantForm.value.sportsId).maxParticipants,
      } 
    };

    this.http.put(`http://localhost:8081/api/sports/updateParticipant/${this.participantId}`, this.participant)
    .subscribe({
      next: (response: any) => {
        console.log(response);
        
        this.snackBar.open('Edited Successfully', 'Close', {
          duration: 2000
        });
        this.router.navigate['/participants'];
        
      },
      error: (error: any) => {
        console.log(error);
        this.snackBar.open('Edit Failed Try Again...', 'Close', {
          duration: 2000
        });
      }
  });
  this.router.navigate(['/participants']);
  }

  
  getAge()
  {
    this.ageGroupService.get().subscribe((data:any) =>{
      this.ageGroups = data;
      console.log(data);
    })
  }

  getCategories()
  {
    this.sportCategoryService.get().subscribe((data:any) =>{
      this.sportsCategories = data;
      console.log(data);
    })
  }

  getSports()
  {
    this.sportsService.get().subscribe((data:any) =>{
      this.sports = data;
      console.log(data);
    })
  }

  getOrganization()
  {
    this.organizationService.get().subscribe((data:any) =>{
      this.organization = data;
      console.log(data);
    })
  }


}
