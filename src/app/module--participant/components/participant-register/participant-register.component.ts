import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AgeGroup } from 'src/app/module--participant/models/AgeGroup';
import { Orgnaization } from 'src/app/module--organization/models/Organization';

import { Sports } from 'src/app/module--sports/models/Sports';
import { SportsCategory } from 'src/app/module--sports/models/SportsCategory';
import { AgegroupService } from 'src/app/module--participant/services/agegroup.service';
import { OrganizationService } from 'src/app/module--organization/services/organization.service';
import { SportsService } from 'src/app/module--sports/services/sports.service';
import { SportscategoryService } from 'src/app/module--sports/services/sportscategory.service';
import { ParticipantService } from 'src/app/module--participant/services/participant.service';
// import * as nodemailer from 'nodemailer';
import * as QRCode from 'qrcode';
import axios from 'axios';





@Component({
  selector: 'app-participant-register',
  templateUrl: './participant-register.component.html',
  styleUrls: ['./participant-register.component.css']
})
export class ParticipantRegisterComponent implements OnInit {


  participantForm: FormGroup;

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
    },
    // qrCode:''
    email:''
  };
  qrCodeUrl: any;


 
  constructor(private participantService:ParticipantService ,private ageService:AgegroupService,
    private organizationService:OrganizationService, private sportsService:SportsService,
    private sportsCatgoryService:SportscategoryService, private http:HttpClient,
    private fb: FormBuilder,private snackBar: MatSnackBar,private router:Router
   )
     { 

      
  }

  ngOnInit(): void {
    this.participantForm = this.fb.group({
      participantId: ['', Validators.required],
      participantName: ['', [Validators.required,Validators.pattern(/^[a-zA-Z\s]+$/)]],
      categoryId: ['', Validators.required],
      sportsId: ['', Validators.required],
      ageGroupId: ['', Validators.required],
      organizationId:['',Validators.required],
      email:['', Validators.required]
    });

    this.getAge();
    this.getCategories();
    this.getOrganization();
    this.getSports();


  }
  

  getAge()
  {
    this.ageService.get().subscribe((data:any) =>{
      this.ageGroups = data;
      console.log(data);
    })
  }

  getCategories()
  {
    this.sportsCatgoryService.get().subscribe((data:any) =>{
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

  onSubmit()
  {
    // const transporter = nodemailer.createTransport(this.emailConfig);
    // const mailOptions = {
    //   from: 'adarsh2509adarsh@gmail.com',
    //   to: 'adarsh2509adarsh@gmail.com', // assuming you have an input for participant email in your form
    //   subject: 'Registration Successful',
    //   text: `Dear ${this.participantForm.value.participantName},\n\nThank you for registering for the sports event.\n\nBest regards,\nThe FalconSportsClub Team`
    // };
  
    // transporter.sendMail(mailOptions, (error, info) => {
    //   if (error) {
    //     console.log(error);
    //   } else {
    //     console.log('Email sent: ' + info.response);
    //   }
    // });
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
      },
      // qrCode:this.qrCodeUrl
      email:this.participantForm.value.email
    };

    
    
  
    this.http.post('http://localhost:8081/api/sports/createParticipant', this.participant).subscribe({
      next: (response: any) => {
        console.log(response);
        this.snackBar.open('Participant submitted successfully', 'Close', {
          duration: 2000
          // verticalPosition: 'top'
        });
        this.router.navigate(['participants'])
        this.resetForm();
      },
      error: (error: any) => {
        console.error(error);
        this.snackBar.open('Registration Failed','close',{
          duration:2000
        });
      }
    });
    QRCode.toDataURL(JSON.stringify(this.participant), (err, url) => {
      if (err) {
        console.error(err);
      } else {
        console.log(url);
        this.qrCodeUrl = url;
        
      }
    });
    //this.router.navigate(['/participants']);
  }

 resetForm()
 {
  this.participantForm.reset();
 }

//  emailConfig = {
//   host: 'smtp.gmail.com',
//   port: 587,
//   secure: false,
//   auth: {
//     user: 'adarsh2509adarsh@gmail.com',
//     pass: 'adarsh@2509'
//   }
// };

// generateQRCode(participant: Participant) {
//   const url = `https://api.apify.com/v2/actor-tasks/t10gjLEKqnO7O4q3k/runs/last/dataset/items?token=APIFY_TOKEN&data=${JSON.stringify(participant)}`;

//   return axios.get(url)
//     .then((response) => response.data[0].qrCodeUrl);
// }

 
}

