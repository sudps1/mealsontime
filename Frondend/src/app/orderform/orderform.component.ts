import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-orderform',
  templateUrl: './orderform.component.html',
  styleUrls: ['./orderform.component.css']
})
export class OrderformComponent implements OnInit {

  constructor(private UserService: UserService,private router: Router) { }
  order= {
    email :'',
    id:'',
    diabetes:'',
    hypertension:'',
    emergency:'',
    quantity:'',
    message:'',
    status: 'false'
  }
  ngOnInit(): void {
    this.order.email=localStorage.getItem("email");
    this.order.id=localStorage.getItem("orderfoodId");
    // this.order.status= false;


  }
  Order(){
    this.UserService.newOrder(this.order);
    console.log("Called");    
    alert("Success");
    this.router.navigate(['usermenu']);
  }
}
