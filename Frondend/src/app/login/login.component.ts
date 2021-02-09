import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FormBuilder,Validators} from '@angular/forms';
import { UserService } from '../user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user={uname:'',
  password:''}
  constructor(private _auth: UserService,
    private _router:Router,private fb:FormBuilder) { }
  
  ngOnInit(): void {
  }
  loginUser () {
    
    this._auth.loginUser(this.user)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token) ;
        localStorage.setItem('email', this.user.uname) ;

        this._router.navigate(['/usermenu'])
      },
      err => {
        console.log(err);
        this._router.navigate([''])
      }
    ) 
  }

}
