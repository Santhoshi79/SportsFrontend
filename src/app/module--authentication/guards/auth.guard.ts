import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  durationInSeconds: 3;

  constructor(private authService: AuthService, private router: Router,private _snackBar: MatSnackBar) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      // this.router.navigate(['/login']);
      this._snackBar.open('Please Login to Falcon SportsClub to Continue', 'Close', {
        duration: this.durationInSeconds * 1000
      });
      return false;
    }
  }
  
}
