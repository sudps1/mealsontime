import { Injectable } from '@angular/core';
import {HttpClient ,HttpResponse} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TakeorderService {

  item = {
    email :'',
    foodname:'',
    quantity:'',
    servedin:'',
    id:''
  }

  constructor(private http:HttpClient) { }

  newRes(item:any)
  {   
    return this.http.post("http://localhost:3000/servedin",{"chefres":item})
    .subscribe(data =>{console.log(data)})
  }
  getOrder(id:any){
    return this.http.get("http://localhost:3000/order/"+id);
  }
  getFood(id:any){
    return this.http.get("http://localhost:3000/food/"+id);
  }
  getUser(id:any){
    return this.http.get("http://localhost:3000/orderuser/"+id);
  }
  getRes(id:any){
    return this.http.get("http://localhost:3000/room/"+id);
  }
}
