import { Injectable } from '@angular/core';
import {HttpClient ,HttpResponse} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AddfoodService {
  item= {
    foodname :'',
    price:'',
    cuisine:'',
    description:'',
    url:''
  }
  constructor(private http:HttpClient) { }
  newFood(item:any)
  {   
    return this.http.post("http://localhost:3000/inputfood",{"food":item})
    .subscribe(data =>{console.log(data)})
  }
  getFoods(){
    return this.http.get("http://localhost:3000/foods");
  }
  getFood(id:any){
    return this.http.get("http://localhost:3000/food/"+id);
  }
  deleteFood(id:any)
  {

    return this.http.delete("http://localhost:3000/removefood/"+id)

  }
  editFood(food:any)
  {
    console.log('client update')
    return this.http.put("http://localhost:3000/updatefood",food)
    .subscribe(data =>{console.log(data)})
  }
  getOrders(){
    return this.http.get("http://localhost:3000/getorders");
  }

}
