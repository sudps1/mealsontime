import { Component, OnInit } from '@angular/core';
import {AuthTwoService} from '../auth-two.service';
import {Router} from '@angular/router'
import { AddfoodService } from '../addfood.service'

@Component({
  selector: 'app-foodmenu',
  templateUrl: './foodmenu.component.html',
  styleUrls: ['./foodmenu.component.css']
})
export class FoodmenuComponent implements OnInit {
  
  constructor(private _router:Router,private AddfoodService: AddfoodService,
    public _auth:AuthTwoService){

}

  ngOnInit(): void {
    this.AddfoodService.getFoods().subscribe((data)=>{
      this.foods=JSON.parse(JSON.stringify(data));
    })
  }
  editFood(food:any)
  {
    localStorage.setItem("editfoodId", food._id.toString());
    this._router.navigate(['updatefood']);

  }
  deleteFood(food:any)
  {
    this.AddfoodService.deleteFood(food._id)
      .subscribe((data) => {
        this.foods = this.foods.filter(p => p !== food);
      })
    }
  loggedUser()
  {
    this._router.navigate(['/addfood'])
  }
  foods= [{
    foodname :'',
    price:'',
    cuisine:'',
    description:'',
    url:''
  }]
}
