import { Injectable } from '@angular/core';
import {HttpClient ,HttpResponse} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _loginUrl = "http://localhost:3000/patientlogin";

  item= {
    firstname :'',
    username:'',
    email:'',
    mobno:'',
    password:'',
    confirmpassword:''
  }
  item1= {
    email :'',
    id:'',
    diabetes:'',
    hypertension:'',
    emergency:'',
    quantity:'',
    message:'',
    status:''
  }
  constructor(private http:HttpClient) { }
  newUser(item:any)
  {   
    return this.http.post("http://localhost:3000/userdetails",{"user":item})
    .subscribe(data =>{console.log(data)})
  }
  newOrder(item1:any)
  {   
    return this.http.post("http://localhost:3000/order",{"order":item1})
    .subscribe(data =>{console.log(data)})
  }
  loginUser(user:any)
  {
    return this.http.post<any>(this._loginUrl, user)
  }

  loggedIn()
  {
    return !!localStorage.getItem('token')
  }
  getToken()
  {
    return localStorage.getItem('token')
  }
}
