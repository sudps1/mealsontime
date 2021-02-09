import { Injectable } from '@angular/core';
import {HttpClient ,HttpResponse} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AddchefService {
  item= {
    fullname :'',
    chefid:'',
    email:'',
    mobno:'',
    password:'',
    confirmpassword:''
  }
  constructor(private http:HttpClient) { }
  getChef(id:any){
    return this.http.get("http://localhost:3000/"+id);
  }
  newChef(item:any)
  {   
    return this.http.post("http://localhost:3000/insert",{"chef":item})
    .subscribe(data =>{console.log(data)})
  }
  getChefs(){
    return this.http.get("http://localhost:3000/chefs");
  }
  deleteChef(id:any)
  {

    return this.http.delete("http://localhost:3000/remove/"+id)

  }
  editChef(chef:any)
  {
    console.log('client update')
    return this.http.put("http://localhost:3000/update",chef)
    .subscribe(data =>{console.log(data)})
  }
}
