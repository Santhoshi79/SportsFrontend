import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
signInWithGoogle() {
throw new Error('Method not implemented.');
}

durationInSeconds = 3;
  form:any = {
    username:null,
    email:null,
    password:null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
isLoggedIn: any;
f: any;

  constructor(private authService:AuthService,private router: Router,private _snackBar: MatSnackBar) { }
  hide = true;
  ngOnInit(): void {
  }
  onSubmit():void{
    const{username,email,password}=this.form;

    this.authService.register(username,email,password).subscribe({
      next: data =>{
        console.log(data);
        this.isSuccessful=true;
        this.isSignUpFailed=false;
        this.redirectToPage();
        this._snackBar.open('Registered Successfully', 'Close', {
          duration: this.durationInSeconds * 1000,
          
        });
        
      },
      error:err =>{
        this.errorMessage=err.error.message;
        this.isSignUpFailed=true;
        this._snackBar.open('Sign up Failed', 'Close', {
          duration: this.durationInSeconds * 1000,
          
        });
      }
    });
  }

  redirectToPage() {
    this.router.navigate(['/login']);
  }

}
