import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {UserService} from '../user.service';
import { TakeorderService } from '../takeorder.service'

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  constructor(private _router:Router,private TakeorderService: TakeorderService,
    public _auth:UserService) { }
    // user=uname:''
  ngOnInit(): void {
   let user = localStorage.getItem("email");
    this.TakeorderService.getRes(user).subscribe((data)=>{
      this.chefres=JSON.parse(JSON.stringify(data));
  })
   
  }
  chefres= {
    roomnumber :'',
    foodname:'',
    quantity:'',
    servedin:'',
    date:''
  }

}
