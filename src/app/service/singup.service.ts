import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SingupService {

  private baseUrl:string = "http://localhost:9900"

  constructor(private http:HttpClient) { }

  register(data:any)
  {
    return this.http.post(`${this.baseUrl}/api/users/`, data)
  }

  // login function 
  login(username:string,password:string){
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.get("http://localhost:8080/",{headers,responseType: 'text' as 'json'})
  }
}
