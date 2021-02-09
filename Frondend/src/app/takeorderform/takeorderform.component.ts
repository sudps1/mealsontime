import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TakeorderService } from '../takeorder.service'
@Component({
  selector: 'app-takeorderform',
  templateUrl: './takeorderform.component.html',
  styleUrls: ['./takeorderform.component.css']
})
export class TakeorderformComponent implements OnInit {
  order= {
    email :'',
    id:'',
    diabetes:'',
    hypertension:'',
    emergency:'',
    quantity:'',
    message:''
  }
  FoodDetails = {
    foodname :'',
    price:'',
    cuisine:'',
    description:'',
    url:''
  }
  
  constructor(private router:Router,private TakeorderService:TakeorderService) { }

  ngOnInit(): void {
    let orderId = localStorage.getItem("orderId");
    this.TakeorderService.getOrder(orderId).subscribe((data)=>{
      this.order=JSON.parse(JSON.stringify(data));
  })

  let foodId = localStorage.getItem("foodId");
    this.TakeorderService.getFood(foodId).subscribe((data)=>{
      this.FoodDetails=JSON.parse(JSON.stringify(data));
  })
  

  }

  chefres = {
    email :'',
    foodname:'',
    quantity:'',
    servedin:'',
    id:''
  }
  Servedin()
  { 
       this.chefres.email=this.order.email;
       this.chefres.foodname=this.FoodDetails.foodname;
       this.chefres.quantity=this.order.quantity;
       let orderedId = localStorage.getItem("orderId");
       this.chefres.id= orderedId;


    this.TakeorderService.newRes(this.chefres);
    console.log("Called");    
    alert("Success");
    this.router.navigate(['/cheftable/foodmenu']);
  }

}
