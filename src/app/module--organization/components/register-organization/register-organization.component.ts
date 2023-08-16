import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Orgnaization } from 'src/app/module--organization/models/Organization';
import { OrganizationService } from 'src/app/module--organization/services/organization.service';

@Component({
  selector: 'app-register-organization',
  templateUrl: './register-organization.component.html',
  styleUrls: ['./register-organization.component.css']
})
export class RegisterOrganizationComponent implements OnInit {

  durationInSeconds = 3;
  organizationForm:FormGroup;
  organization:Orgnaization = new Orgnaization();
   grecaptcha: any;
   recaptchaToken:String;

  siteKey = '6LcjnVMlAAAAADzEBxHPUpWpQCkC2IfQ10kEswCc';
  captchaResponse: string;

  // @ViewChild(RecaptchaComponent, {static: false}) captchaComponent: RecaptchaComponent;
  // captchaSiteKey: string = '<your-site-key>';
  constructor(private organizationService:OrganizationService , private fb:FormBuilder,private _snackBar: MatSnackBar) { }
  ngOnInit(): void {

    this.organizationForm = this.fb.group({
      organizationId: ['', Validators.required],
      organizationName: ['', [Validators.required,Validators.pattern(/^[a-zA-Z\s]+$/)]],
      averageStudentStrength: ['', Validators.required]
    });
  }

  createOrganization(organization) {
    this.organizationService.create(this.organization).subscribe({
      next: (data) => {
        console.log(data);
        this._snackBar.open('Registered Successfully', 'Close', {
          duration: this.durationInSeconds * 1000
        });
      },
      error: (err) => {
        console.log(err);
        this._snackBar.open('Registration Failed', 'Close', {
          duration: this.durationInSeconds * 1000
        });
      }
    })
    
  }
  

  onSubmit()
  { 
    this.organization = {
      organizationId: this.organizationForm.value.organizationId,
      organizationName: this.organizationForm.value.organizationName,
      averageStudentStrength:this.organizationForm.value.averageStudentStrength
    }
    console.log(this.organizationForm.value);
    this.createOrganization(this.organization);
  }


  resetForm()
  {
    this.organizationForm.reset();
  }

  handleCorrectCaptcha(event) {
    this.captchaResponse = event;
 }
 


}
