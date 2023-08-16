import { Injectable } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';


export interface UserInfo{
  info: {
    sub:string,
    email:string,
    name:string,
    picture:String
  }
}
const oAuthConfig: AuthConfig = {
  issuer: 'https://accounts.google.com',
  strictDiscoveryDocumentValidation:false,
  redirectUri:window.location.origin,
  clientId:'176163667174-nlam3196341imgj8b6q439tkiqo0cqiv.apps.googleusercontent.com',
  scope:'openid profile email'
}
@Injectable({
  providedIn: 'root'
})
export class GoogleApiService {

  userProfileSubject = new Subject<UserInfo>()
  constructor(private readonly oAuthService:OAuthService, private router:Router) { 
  oAuthService.configure(oAuthConfig)
  oAuthService.logoutUrl="https://www.google.com/accounts/Logout"
  }


  isLoggedIn():boolean
  {
    return this.oAuthService.hasValidAccessToken()
    
  }

  signOut()
  {
    this.oAuthService.logOut()
  }

  signInWithGoogle() {
    this.oAuthService.loadDiscoveryDocument().then(() =>{
      this.oAuthService.tryLoginImplicitFlow().then(() =>
      {
        if(!this.oAuthService.hasValidAccessToken())
        {
          this.oAuthService.initLoginFlow()
          
        }
        else{
          this.oAuthService.loadUserProfile().then((userProfile) =>
          {
            this.userProfileSubject.next(userProfile as UserInfo);
            this.router.navigate(['/front'])
            
          })
        }
      })
    }) 
}
}
