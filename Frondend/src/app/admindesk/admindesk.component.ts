import { Component, OnInit } from '@angular/core';
import {AuthOneService} from '../auth-one.service';
import {Router} from '@angular/router'
import { AddchefService } from '../addchef.service'

@Component({
  selector: 'app-admindesk',
  templateUrl: './admindesk.component.html',
  styleUrls: ['./admindesk.component.css']
})
export class AdmindeskComponent implements OnInit {

  constructor(private _router:Router,private AddchefService: AddchefService,
    public _auth:AuthOneService){

}

  ngOnInit(): void {
    this.AddchefService.getChefs().subscribe((data)=>{
      this.chefs=JSON.parse(JSON.stringify(data));
  })
  }
  editChef(chef:any)
  {
    localStorage.setItem("editchefId", chef._id.toString());
    this._router.navigate(['updatechef']);

  }
  deleteChef(chef:any)
  {
    this.AddchefService.deleteChef(chef._id)
      .subscribe((data) => {
        this.chefs = this.chefs.filter(p => p !== chef);
      })
  

  }
  loggedUser()
  {
    this._router.navigate(['/addchef'])
  }
  chefs= [{
    fullname :'',
    chefid:'',
    email:'',
    mobno:'',
    password:'',
    confirmpassword:''
  }]
}
