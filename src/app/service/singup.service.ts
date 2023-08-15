import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class SingupService {

  

  constructor(private http:HttpClient) { }

//Adding New user-----------------------------------------------------------------------------  
  register(data:any)
  {
    return this.http.post(`${baseUrl}/api/users/registration`, data);
  }

//Update existing user by user id-----------------------------------------------------------
  updateUser(user:any, userId:any)
  {
    return this.http.put(`${baseUrl}/api/users/${userId}`, user);
  }

//OTP-verification function------------------------------------------------------------------------------
 otpVerify(userId:any, Otp:any)
 {
    return this.http.post(`${baseUrl}/api/users/otp-verification`, userId);
 }

//OTP-verification function------------------------------------------------------------------------------ 
 otpVerifyByOtp(Otp:any)
 {
    return this.http.post(`${baseUrl}/api/users/otp-verification/${Otp}`, Otp);
 }
 
  
}
