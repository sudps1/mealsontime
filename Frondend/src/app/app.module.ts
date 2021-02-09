import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {AuthOneService} from './auth-one.service';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { TokenInterceptorOneService } from './token-interceptor-one.service';
import {AuthOneGuard} from './auth-one.guard';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { HomebodyComponent } from './homebody/homebody.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ChefloginComponent } from './cheflogin/cheflogin.component';
import { AdmindeskComponent } from './admindesk/admindesk.component';
import { AddchefComponent } from './addchef/addchef.component';
import { EditchefComponent } from './editchef/editchef.component';
import { CheftableComponent } from './cheftable/cheftable.component';
import { UsermenuComponent } from './usermenu/usermenu.component';
import { FoodmenuComponent } from './foodmenu/foodmenu.component';
import { PatientordersComponent } from './patientorders/patientorders.component';
import { AddfoodComponent } from './addfood/addfood.component';
import { UpdatefoodComponent } from './updatefood/updatefood.component';
import { OrderformComponent } from './orderform/orderform.component';
import { TakeorderformComponent } from './takeorderform/takeorderform.component';
import { NotificationsComponent } from './notifications/notifications.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupComponent,
    LoginComponent,
    FooterComponent,
    HomebodyComponent,
    AdminloginComponent,
    ChefloginComponent,
    AdmindeskComponent,
    AddchefComponent,
    EditchefComponent,
    CheftableComponent,
    UsermenuComponent,
    FoodmenuComponent,
    PatientordersComponent,
    AddfoodComponent,
    UpdatefoodComponent,
    OrderformComponent,
    TakeorderformComponent,
    NotificationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthOneService,AuthOneGuard,
  {
    provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorOneService,
      multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
