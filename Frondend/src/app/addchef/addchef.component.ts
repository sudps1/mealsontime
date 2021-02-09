import { Component, OnInit } from '@angular/core';
import { AddchefService } from '../addchef.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-addchef',
  templateUrl: './addchef.component.html',
  styleUrls: ['./addchef.component.css']
})
export class AddchefComponent implements OnInit {

  constructor(private AddchefService: AddchefService,private router: Router){  } 

  UserDetail= {
    fullname :'',
    chefid:'',
    email:'',
    mobno:'',
    password:'',
    confirmpassword:''
  }
  ngOnInit(): void {
  }
  AddChef()
  {    
    this.AddchefService.newChef(this.UserDetail);
    console.log("Called");    
    alert("Success");
    this.router.navigate(['/admindesk']);
  }

}
