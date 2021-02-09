import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmindeskComponent } from './admindesk/admindesk.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ChefloginComponent } from './cheflogin/cheflogin.component';
import { HomebodyComponent } from './homebody/homebody.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthOneGuard } from './auth-one.guard';
import { AuthtwoGuard } from './authtwo.guard';
import { AuthtthreeGuard } from './authtthree.guard';

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

const routes: Routes = [
  {
    path:'',component: HomebodyComponent

  },
  {
    path:'signup',component: SignupComponent

  },
  {
    path:'login',component: LoginComponent

  },
  {
    path:'adminlogin',component: AdminloginComponent

  },
  {
    path:'usermenu',
    canActivate: [AuthtthreeGuard],    
    component: UsermenuComponent

  },
  {
    path:'orderform',
    canActivate: [AuthtthreeGuard],    
    component: OrderformComponent

  },
  {
    path:'notifications',
    canActivate: [AuthtthreeGuard],    
    component: NotificationsComponent

  },
  {
    path:'cheflogin',component: ChefloginComponent

  },
  
  {
    path:'cheftable',
    canActivate: [AuthtwoGuard],
    component: CheftableComponent,
    children:[
      {path:'foodmenu',component: FoodmenuComponent},
      {path:'patientorders',component: PatientordersComponent}

    ]

  },
  {
    path:'addfood',
    canActivate: [AuthtwoGuard],
    component: AddfoodComponent
  },
  {
    path:'takeorderform',
    canActivate: [AuthtwoGuard],
    component: TakeorderformComponent
  },
  {
    path:'updatefood',
    canActivate: [AuthtwoGuard],
    component: UpdatefoodComponent,
  },
  {
    path:'admindesk',
    canActivate: [AuthOneGuard],
    component: AdmindeskComponent

  },
  {
    path:'addchef',
    canActivate: [AuthOneGuard],
    component: AddchefComponent

  },
  {
    path:'updatechef',
    canActivate: [AuthOneGuard],
    component: EditchefComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
