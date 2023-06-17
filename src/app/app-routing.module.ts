import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './compomnents/home/home.component';
import { LoginComponent } from './compomnents/login/login.component';
import { SingupComponent } from './compomnents/singup/singup.component';
import { AdminDashComponent } from './compomnents/admin/admin-dash/admin-dash.component';
import { UserDashComponent } from './compomnents/user/user-dash/user-dash.component';

const routes: Routes = [
  {
    path:"login",
    component:LoginComponent,
    pathMatch:"full"
  },

  {
    path:"",
    component:HomeComponent,
    pathMatch:"full"
  },

  {
    path:"signup",
    component:SingupComponent,
    pathMatch:"full"
  },

  {
    path: 'admin-dash',
    component: AdminDashComponent,
    pathMatch: 'full',
  },

  {
    path: 'user-dash',
    component: UserDashComponent,
    pathMatch: 'full',
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
