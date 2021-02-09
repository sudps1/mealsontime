import { Component, OnInit } from '@angular/core';
import { AddfoodService } from '../addfood.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-addfood',
  templateUrl: './addfood.component.html',
  styleUrls: ['./addfood.component.css']
})
export class AddfoodComponent implements OnInit {

  constructor(private AddfoodService: AddfoodService,private router: Router){  } 

  ngOnInit(): void {
  }
  FoodDetails = {
    foodname :'',
    price:'',
    cuisine:'',
    description:'',
    url:''
  }
  Addfood()
  {    
    this.AddfoodService.newFood(this.FoodDetails);
    console.log("Called");    
    alert("Success");
    this.router.navigate(['/cheftable/foodmenu']);
  }
}
