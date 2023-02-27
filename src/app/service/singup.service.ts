import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SingupService {

  private baseUrl:string = "http://localhost:9900"

  constructor(private http:HttpClient) { }

  register(data:any)
  {
    this.http.post(`${this.baseUrl}/signup`, data)
  }
}
