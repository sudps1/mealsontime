import { Injectable } from '@angular/core';
import { CanActivate,Router} from '@angular/router';
import {AuthTwoService} from './auth-two.service';

@Injectable({
  providedIn: 'root'
})
export class AuthtwoGuard implements CanActivate {
  constructor(private _auth:AuthTwoService,private _router:Router)
  {

  }
  canActivate():boolean{
    if (this._auth.loggedIn())
    {
      console.log('true')
      return true

    }
    else{
      this._router.navigate(['/cheflogin'])
      return false

    }
  }
  
}
