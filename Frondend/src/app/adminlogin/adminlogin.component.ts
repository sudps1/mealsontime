import { Component, OnInit } from '@angular/core';
import { AuthOneService } from '../auth-one.service';
import { Router } from '@angular/router'
import { FormBuilder,Validators} from '@angular/forms';
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  constructor(private _auth: AuthOneService,
    private _router:Router,private fb:FormBuilder) { }

  user={uname:'',
  password:''}

  ngOnInit() {
  }
loginUser () {
    
    this._auth.loginUser(this.user)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token) 
        this._router.navigate(['/admindesk'])
      },
      err => {
        console.log(err);
        this._router.navigate([''])
      }
    ) 
  }
}
