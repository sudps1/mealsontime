import { Component, OnInit } from '@angular/core';
import {AuthOneService} from '../auth-one.service';
import {UserService} from '../user.service';

import {Router} from '@angular/router'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  isCollapsed = false;

  toggleNavbar() {
    this.isCollapsed = !this.isCollapsed;
  }  

  constructor(public _auth:AuthOneService,public _authuser:UserService,
    private _router:Router) { }

  ngOnInit(): void {
  }
  logoutUser()
  {
  localStorage.removeItem('token')
  this._router.navigate(['/'])
  }
}
