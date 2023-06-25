import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';



@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

    //get all categories
//---In this function we only can see limited categories on page because of pagination
    public getListOfCategories()
    {
      return this.http.get(`${baseUrl}/api/category/`);
    }
  
    //Add new Caregory
    public addNewCate(category:any)
    {
      return this.http.post(`${baseUrl}/api/category/`,category);
    }

    //we need to add another functions for category e.g. update category, delete category, getsingle cate by id
    //Above functions are ready in Backend API
}
