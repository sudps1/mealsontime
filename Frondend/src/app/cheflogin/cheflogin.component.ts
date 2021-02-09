import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FormBuilder,Validators} from '@angular/forms';
import { AuthTwoService } from '../auth-two.service';

@Component({
  selector: 'app-cheflogin',
  templateUrl: './cheflogin.component.html',
  styleUrls: ['./cheflogin.component.css']
})
export class ChefloginComponent implements OnInit {
  user={uname:'',
  password:''}
  constructor(private _auth: AuthTwoService,
    private _router:Router,private fb:FormBuilder) { }
  
  ngOnInit(): void {
  }
  loginUser () {
    
    this._auth.loginUser(this.user)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token) 
        this._router.navigate(['/cheftable/foodmenu'])
      },
      err => {
        console.log(err);
        this._router.navigate([''])
      }
    ) 
  }
}
