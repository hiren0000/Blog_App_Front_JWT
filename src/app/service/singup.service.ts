import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SingupService {

  private baseUrl:string = "http://localhost:9990"

  constructor(private http:HttpClient) { }

  register(data:any)
  {
    return this.http.post(`${this.baseUrl}/signup`, data)
  }
}
