import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
// import { Observable } from 'rxjs';
import {AuthOneService} from './auth-one.service';

@Injectable({
  providedIn: 'root'
})
export class AuthOneGuard implements CanActivate {
  constructor(private _auth:AuthOneService,private _router:Router)
  {

  }
  canActivate():boolean{
    if (this._auth.loggedIn())
    {
      console.log('true')
      return true

    }
    else{
      this._router.navigate(['/adminlogin'])
      return false

    }
  }
  
}
