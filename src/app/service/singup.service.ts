import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class SingupService {

  

  constructor(private http:HttpClient) { }

  register(data:any)
  {
    return this.http.post(`${baseUrl}/api/users/`, data)
  }

 
  
}
