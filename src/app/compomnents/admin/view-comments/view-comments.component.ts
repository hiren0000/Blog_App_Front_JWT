import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from 'src/app/service/comment.service';
import { PostService } from 'src/app/service/post.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-comments',
  templateUrl: './view-comments.component.html',
  styleUrls: ['./view-comments.component.css']
})
export class ViewCommentsComponent implements OnInit
{
  postId = ' ';

  comments = 
  [
    {
      content: '',
      user:
      {
        id: '',
        name: '',
        email: '',
      }
    }
  ]
    
  constructor(private route:ActivatedRoute,
              private commentService:CommentService){}

  ngOnInit(): void 
  {
    //
    this.postId = this.route.snapshot.params['poId'];

//Fetching Comments of posts by given postId
    this.commentService.getListOfCommByPo(this.postId).subscribe({
      next: (data:any)=>
      {
        this.comments=data;
      },
      error: (error)=>
      {
        console.log(error);
        Swal.fire('Error', 'error with fetching data !! ', 'error');
        
      }
    });    
      
  }
}
