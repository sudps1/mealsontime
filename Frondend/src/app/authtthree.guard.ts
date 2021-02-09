import { Injectable } from '@angular/core';
import { CanActivate,Router} from '@angular/router';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthtthreeGuard implements CanActivate {
  constructor(private _auth:UserService,private _router:Router)
  {

  }
  canActivate():boolean{
    if (this._auth.loggedIn())
    {
      console.log('true')
      return true

    }
    else{
      this._router.navigate(['/login'])
      return false

    }
  }
}
