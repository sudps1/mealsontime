import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { UserService } from '../user.service'
import { AddfoodService } from '../addfood.service'

@Component({
  selector: 'app-usermenu',
  templateUrl: './usermenu.component.html',
  styleUrls: ['./usermenu.component.css']
})
export class UsermenuComponent implements OnInit {

  constructor(private _router:Router,private AddfoodService: AddfoodService,
    public _auth:UserService) { }

  ngOnInit(): void {
    this.AddfoodService.getFoods().subscribe((data)=>{
      this.foods=JSON.parse(JSON.stringify(data));
    })
  }
  Order(food:any)
  {
    localStorage.setItem("orderfoodId", food._id.toString());
    this._router.navigate(['orderform']);

  }
  foods= [{
    foodname :'',
    price:'',
    cuisine:'',
    description:'',
    url:''
  }]
  loggedUser(){
    this._router.navigate(['/notifications'])

  }
}
