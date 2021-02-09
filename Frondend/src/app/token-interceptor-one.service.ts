import { Injectable,Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import {AuthOneService} from './auth-one.service';
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorOneService implements HttpInterceptor {

  constructor(private injector:Injector) { }
  intercept(req:any,nxt:any)
  {
    let authOneService = this.injector.get(AuthOneService)
    let tokenizedReq = req.clone(
      {
        setHeaders:{
          Authorization:`Bearer ${authOneService.getToken()}`
        }
      }
    )
    return nxt.handle(tokenizedReq)

  }
}
