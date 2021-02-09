import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddchefService } from '../addchef.service'

@Component({
  selector: 'app-editchef',
  templateUrl: './editchef.component.html',
  styleUrls: ['./editchef.component.css']
})
export class EditchefComponent implements OnInit {
  UserDetail= {
    fullname :'',
    chefid:'',
    email:'',
    mobno:'',
    password:'',
    confirmpassword:''
  }
  constructor(private router:Router,private addchefService:AddchefService) { }

  ngOnInit(): void {
    let chefId = localStorage.getItem("editchefId");
    this.addchefService.getChef(chefId).subscribe((data)=>{
      this.UserDetail=JSON.parse(JSON.stringify(data));
  })
  }
  editChef()
  {    
    this.addchefService.editChef(this.UserDetail);   
    alert("Success");
    this.router.navigate(['admindesk']);
  }

}
