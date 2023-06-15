import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http:HttpClient) { }

//Generate-token
public generateToken(loginData:any)
{
  return this.http.post(`${baseUrl}/api/auth/generate-token`,loginData)
}

}
