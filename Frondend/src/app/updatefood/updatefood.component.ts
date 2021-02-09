import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddfoodService } from '../addfood.service'
@Component({
  selector: 'app-updatefood',
  templateUrl: './updatefood.component.html',
  styleUrls: ['./updatefood.component.css']
})
export class UpdatefoodComponent implements OnInit {

  FoodDetails = {
    foodname :'',
    price:'',
    cuisine:'',
    description:'',
    url:''
  }
  constructor(private router:Router,private AddfoodService:AddfoodService) { }


  ngOnInit(): void {
    let foodId = localStorage.getItem("editfoodId");
    this.AddfoodService.getFood(foodId).subscribe((data)=>{
      this.FoodDetails=JSON.parse(JSON.stringify(data));
  })
  }
  editFood()
  {    
    this.AddfoodService.editFood(this.FoodDetails);   
    alert("Success");
    this.router.navigate(['/cheftable/foodmenu']);
  }

}
