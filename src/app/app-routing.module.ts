import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './compomnents/home/home.component';
import { LoginComponent } from './compomnents/login/login.component';
import { SingupComponent } from './compomnents/singup/singup.component';
import { AdminDashComponent } from './compomnents/admin/admin-dash/admin-dash.component';
import { UserDashComponent } from './compomnents/user/user-dash/user-dash.component';
import { AdminGuard } from './service/admin.guard';
import { NormalGuard } from './service/normal.guard';
import { ProfileComponent } from './compomnents/admin/profile/profile.component';
import { WelcomeComponent } from './compomnents/admin/welcome/welcome.component';
import { ViewCategoriesComponent } from './compomnents/admin/view-categories/view-categories.component';
import { AddCategoryComponent } from './compomnents/admin/add-category/add-category.component';
import { ViewPostComponent } from './compomnents/admin/view-post/view-post.component';
import { AddPostComponent } from './compomnents/admin/add-post/add-post.component';
import { ViewListPostsForSpeCateComponent } from './compomnents/admin/view-list-posts-for-spe-cate/view-list-posts-for-spe-cate.component';

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
    canActivate: [AdminGuard],

    children: [
      {
        path: '',
        component: WelcomeComponent,
      
      },

      {
        path: 'profile',
        component: ProfileComponent,

      },

      {
        path: 'view-list-categories',
        component: ViewCategoriesComponent,
        
      },

      {
        path: 'add-new-category',
        component:AddCategoryComponent,
      },

      {
        path: 'view-list-posts-for-specific-category/:coId/:coName',
        component:ViewListPostsForSpeCateComponent,
        
      },

      {
        path: 'view-list-posts',
        component:ViewPostComponent,
        
      },

      {
        path: 'add-new-post',
        component:AddPostComponent,
      },
    ]
  },

  {
    path: 'user-dash',
    component: UserDashComponent,
    pathMatch: 'full',
    canActivate: [NormalGuard],
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
