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

  commentId = '';

  comments = 
  [
    {
      coId: '',
      content: '',
      user:
      {
        id: '',
        name: '',
        email: '',
      },
     
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
        this.comments=data.comment;
      },
      error: (error)=>
      {
        console.log(error);
        Swal.fire('Error', 'error with fetching data !! ', 'error');
        
      }
    });    
      
  }

//Deleting selected comment
    deleteCommentFun(commentId:any)
    {  
      Swal.fire({
        icon: 'question',
        title: 'Are you sure???',
        confirmButtonText: 'Delete',
        showCancelButton: true,
      }).then((result)=>
      {

    //calling delete function
      if(result.isConfirmed)
      {
        this.commentService.deleteComment(commentId).subscribe({
          next: (data:any)=>
          { 
      //below function will help page to do the filter and get the accurate data after deletation 
            console.log(data);
            this.comments = this.comments.filter((comment) => comment.coId != commentId)
            Swal.fire('Success', 'Quiz successfully deleted !!', 'success');
          
            
          },
          error: (error)=>
          {
            console.log(error);
            Swal.fire('Error', 'Something went wrong with deleteing comment !! ', 'error');

          }
        });
      }


    });

    }  
     
}
