import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }

//Adding new post for specific user and category
  public AddNewPost(post:any, id:any, coId:any)
  {
    return this.http.post(`${baseUrl}/api/user/${id}/category/${coId}/posts`, post);
  }


//Getting all the list of posts
  public getListofPosts()
  {
    return this.http.get(`${baseUrl}/api/posts`);
  } 
 
//Fetching List of posts for specific category
  public getListofPostsByCat(coId:any)
  {
    return this.http.get(`${baseUrl}/api/category/${coId}/posts`)
  }  

}
