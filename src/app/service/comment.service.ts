import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http:HttpClient) { }

//adding new comment 
   public addNewComment(comment:any, userId:any, postId:any)
   {
     return this.http.post(`${baseUrl}/api/${userId}/${postId}/comments`, comment);
   }  

//Fetchign the List of commetns for specific post 
    public getListOfCommByPo(postId:any)
    {
      return this.http.get(`${baseUrl}/api/post/${postId}/comments`);
    } 
 
//Delete Comment
    public deleteComment(coId:any)
    {
      return this.http.delete(`${baseUrl}/api/comments/${coId}`);
    }    
}
