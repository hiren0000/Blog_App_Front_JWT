import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http:HttpClient) { }


//Fetching Current User data-----------------------------------------------------------------------------------
      public currentUser()
      {
        return this.http.get(`${baseUrl}/api/auth/current-user`);
      }  

//Generate-token-----------------------------------------------------------------------------------------------
      public generateToken(data:any)
      {
        return this.http.post(`${baseUrl}/api/auth/generate-token`, data);
      }

//Login User::: set token in Local Storage--------------------------------------------------------------------
      public loginUser(token:any)
      {
        localStorage.setItem('token', token);
        return true;
      }

//is logged in or not-----------------------------------------------------------------------------------
      public isLoggedIn()
      {
        let tokenStr = localStorage.getItem('token');
        if(tokenStr == undefined || tokenStr == '' || tokenStr == null)
        {
          return false;
        }
        else
        {
          return true;
        }
      }   
      
//Logging out----------------------------------------------------------------------------------------------
        public logOut()
        {
         localStorage.removeItem('token');
         this.removeUSer();
          return true;
        }

//get token from local storage-------------------------------------------------------------------------------
        public getToken()
        {
          return localStorage.getItem('token');
        }

 //setting user details locally----------------------------------------------------------------------------------------
        public setUser(user:any)
        {
          return localStorage.setItem('user', JSON.stringify(user));

        }

//removing user dettails----------------------------------------------------------------------------------------------
        public removeUSer()
        {
           localStorage.removeItem('user');
           return true;
        }        

 //getting User details--------------------------------------------------------------------------------------------- 
      public getUser()
      {
        let userStr = localStorage.getItem('user');
        if(userStr != null)
        {
          return JSON.parse(userStr);
        }
        else
        {
          this.logOut();
          return null;
        }
      }

 // get User Role::::::again do check this method not sure how does it work ---------------------------------
        public getUserRole()
        {
          let user = this.getUser()
          return user.authorities[0].authority;
        }

//Get user by user Id for the OTP verification
        public getUserForOTP(userId:any)
        {
          return this.http.get(`${baseUrl}/api/users/${userId}`);
        }


}
