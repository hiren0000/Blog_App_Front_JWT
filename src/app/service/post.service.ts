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

//Fetching List of posts for specific user
  public getListofPostsByUser(userId:any)
  {
    return this.http.get(`${baseUrl}/api/user/${userId}/posts`)
  }  

//Fetching single post by id
  public getSinglePost(poId:any)
  {
    return this.http.get(`${baseUrl}/api/posts/${poId}`);
  }  

//Upadating existing post by postId
  public updatePost(post:any ,coId:any ,poId:any)  
  {
    return this.http.put(`${baseUrl}/api/category/${coId}/posts/${poId}`, post);
  }

//Deleting post by id
  public deletePost(poId:any)
  {
    return this.http.delete(`${baseUrl}/api/posts/${poId}`);
  }  

}
