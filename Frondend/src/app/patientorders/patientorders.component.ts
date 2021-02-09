import { Component, OnInit } from '@angular/core';
import {AuthTwoService} from '../auth-two.service';
import {Router} from '@angular/router'
import { AddfoodService } from '../addfood.service'
@Component({
  selector: 'app-patientorders',
  templateUrl: './patientorders.component.html',
  styleUrls: ['./patientorders.component.css']
})
export class PatientordersComponent implements OnInit {

  constructor(private _router:Router,private AddfoodService: AddfoodService,
    public _auth:AuthTwoService) { }


  ngOnInit(): void {
    this.AddfoodService.getOrders().subscribe((data)=>{
      this.orders=JSON.parse(JSON.stringify(data));
  })
  }
  takeOrder(order:any)
  {
    localStorage.setItem("orderId", order._id.toString());
    localStorage.setItem("email", order.email.toString());
    localStorage.setItem("foodId", order.id.toString());


    this._router.navigate(['takeorderform']);

  }
  orders= [{
    email :'',
    id:'',
    diabetes:'',
    hypertension:'',
    emergency:'',
    quantity:'',
    message:'',
    status: Boolean
  }]
}
