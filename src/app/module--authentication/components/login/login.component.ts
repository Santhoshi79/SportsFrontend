import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { GoogleApiService, UserInfo } from 'src/app/module--authentication/services/google-api.service';
import { StorageService } from 'src/app/module--authentication/services/storage.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  durationInSeconds=3;
  title = 'angular-google-login-example';
  userInfo: UserInfo;
  form:any ={
    username :null,
    password:null
  };
  isLoggedIn =false;
  isLoginFailed= false;
  errorMessage ='';
  roles :string[] = [];
  username!:any;


  constructor(private authService:AuthService, private storageService: StorageService, private router:Router
  ,public google: GoogleApiService ,private _snackBar: MatSnackBar) {
    google.userProfileSubject.subscribe(info => {
      this.userInfo = info;
    })
   }
  hide = true;

  ngOnInit(): void {
    if(this.storageService.isLoggedIn()){
      this.isLoggedIn=true;
      this.roles=this.storageService.getUser().roles;
    }
  }

  onSubmit():void{

    const{ username, password}= this.form;
    this.authService.login(username, password).subscribe({
      next:data =>{
        this.storageService.saveUser(data);

        this.isLoginFailed=false;
        this.isLoggedIn = true;
       // this.roles = this.storageService.getUser().roles;
       // this.reloadPage();
       this.username= username;
       //this.toastr.success(`welcome ,${this.username}`);
        this.redirectToPage();
        this._snackBar.open(`welcome ,${this.username}`, 'Close', {
          duration: this.durationInSeconds * 1000,
          
        });
      },
      error:err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed=true;
        this._snackBar.open('Login Failed', 'Close', {
          duration: this.durationInSeconds * 1000,
          
        });
      }
    });
  }

  reloadPage():void{
    window.location.reload();
  }
  redirectToPage() {
    this.router.navigate(['/front']);
  }

  isLogged(): boolean {
    return this.google.isLoggedIn()
    this.redirectToPage()
  }

  logout() {
    this.google.signOut()
  }

  signInWithGoogle() {
    this.google.signInWithGoogle()
   
  }

}
