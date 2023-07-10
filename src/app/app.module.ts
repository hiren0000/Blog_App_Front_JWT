import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './compomnents/navbar/navbar.component';
import { HomeComponent } from './compomnents/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button"
import {MatSnackBarModule} from "@angular/material/snack-bar"
import {MatToolbarModule} from "@angular/material/toolbar"
import {MatIconModule} from "@angular/material/icon";
import { LoginComponent } from './compomnents/login/login.component'
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { SingupComponent } from './compomnents/singup/singup.component';
import { HttpClientModule } from '@angular/common/http';
import { SingupService } from './service/singup.service';
import {MatCardModule} from '@angular/material/card';
import { authInterceptorProviders } from './service/auth.interceptor';
import { AdminDashComponent } from './compomnents/admin/admin-dash/admin-dash.component';
import { UserDashComponent } from './compomnents/user/user-dash/user-dash.component';
import { ProfileComponent } from './compomnents/admin/profile/profile.component';
import { SideBarComponent } from './compomnents/admin/side-bar/side-bar.component';
import {MatListModule} from '@angular/material/list';
import { WelcomeComponent } from './compomnents/admin/welcome/welcome.component';
import { ViewCategoriesComponent } from './compomnents/admin/view-categories/view-categories.component';
import { AddCategoryComponent } from './compomnents/admin/add-category/add-category.component';
import { AddPostComponent } from './compomnents/admin/add-post/add-post.component';
import { ViewPostComponent } from './compomnents/admin/view-post/view-post.component';
import { ViewListPostsForSpeCateComponent } from './compomnents/admin/view-list-posts-for-spe-cate/view-list-posts-for-spe-cate.component';
import {MatSelectModule} from '@angular/material/select';
import { UpdatePostComponent } from './compomnents/admin/update-post/update-post.component';
import { ViewCommentsComponent } from './compomnents/admin/view-comments/view-comments.component';
import { AddCommentComponent } from './compomnents/admin/add-comment/add-comment.component';
import { UserSideBarComponent } from './compomnents/user/user-side-bar/user-side-bar.component';
import { UserWelcomeComponent } from './compomnents/user/user-welcome/user-welcome.component';
import { UserProfileComponent } from './compomnents/user/user-profile/user-profile.component';
import { ViewMyPostsComponent } from './compomnents/user/view-my-posts/view-my-posts.component';
import { SearchPostTitleComponent } from './compomnents/user/search-post-title/search-post-title.component';
import { UserAddPostComponent } from './compomnents/user/user-add-post/user-add-post.component';
import { UserUpdatePostComponent } from './compomnents/user/user-update-post/user-update-post.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    SingupComponent,
    AdminDashComponent,
    UserDashComponent,
    ProfileComponent,
    SideBarComponent,
    WelcomeComponent,
    ViewCategoriesComponent,
    AddCategoryComponent,
    AddPostComponent,
    ViewPostComponent,
    ViewListPostsForSpeCateComponent,
    UpdatePostComponent,
    ViewCommentsComponent,
    AddCommentComponent,
    UserSideBarComponent,
    UserWelcomeComponent,
    UserProfileComponent,
    ViewMyPostsComponent,
    SearchPostTitleComponent,
    UserAddPostComponent,
    UserUpdatePostComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    HttpClientModule,
    MatCardModule,
    MatListModule,
    MatSelectModule
 
  ],
  providers: [MatSnackBarModule, SingupService, authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
