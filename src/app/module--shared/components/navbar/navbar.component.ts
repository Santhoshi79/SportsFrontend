import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/module--authentication/services/auth.service';
import { GoogleApiService } from 'src/app/module--authentication/services/google-api.service';
import { StorageService } from 'src/app/module--authentication/services/storage.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  durationInSeconds=3;
  constructor(public authService:AuthService, private storageService:StorageService,private router:Router
    ,private _snackBar: MatSnackBar,private oauthService:GoogleApiService) { }

  ngOnInit(): void {
    
  }

  
  logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();

       // window.location.reload();
       this.oauthService.signOut()
       //this.toastr.success('SuccessFully logged out');
        this.redirectToPage();
        this._snackBar.open('Logout SucessFul', 'Close', {
          duration: this.durationInSeconds * 1000
        });
      },
      error: err => {
        console.log(err);
        this._snackBar.open('cant logout', 'Close', {
          duration: this.durationInSeconds * 1000
        });
      }
    });
  }

  redirectToPage() {
    this.router.navigate(['/login']);
  }

  signout()
  {
    this.oauthService.signOut()
  }

}
