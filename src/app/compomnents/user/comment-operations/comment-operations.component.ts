import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from 'src/app/service/comment.service';
import { LoginServiceService } from 'src/app/service/login-service.service';
import { PostService } from 'src/app/service/post.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-comment-operations',
  templateUrl: './comment-operations.component.html',
  styleUrls: ['./comment-operations.component.css']
})
export class CommentOperationsComponent implements OnInit 
{

  postId = '';

  postData =
    {
     poId: '',
     poTitle: '',
     poImageName: '',
     poContent: '',
     poDate: '',
     category: 
     {
       coId: '',
       coName: '',
       coDes: '',
     },
     user: 
     {
       id: '',
       name: '',
       email:'',
       pass: '',
       about: '',
     }, 
     comments :
     [
       {
         coId: '',
         content: '',
       }
     ]
   };
   
  

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

  //below functions are for adding new comment 
  user = 
  {
    id : '',
    name: '',
    email: '',
    pass: '',
    about: '',
  }

  comment =   
    {
      coId: '',
      content: '',
    }

  constructor(private route:ActivatedRoute,
              private commentService:CommentService,
              private userService:LoginServiceService,
              private snack:MatSnackBar,
              private postService:PostService) {}

  ngOnInit(): void 
  {
    this.postId = this.route.snapshot.params['poId'];
    console.log(this.postId);

/*Fetching list of comments for specific Post with it;s user---------------------------------------------------
    this.commentService.getListOfCommByPo(this.postId).subscribe({
      next : (data:any)=>
      {
        this.comments = data.comment;
      },
      error: (error)=>
      {
        console.log(error);        
        Swal.fire('Error', 'error with fetching comments data !!', 'error');
      }
    });*/

    this.postService.getSinglePost(this.postId).subscribe({
      next : (data:any)=>
      {
        this.postData = data.PostData;
        console.log(data);
        
      },
      error: (error)=>
      {
        console.log(error);        
        Swal.fire('Error', 'error with fetching comments data !!', 'error');
      }
    });

//Get User Details----------------------------------------------------------------------------------------
    if(this.userService.isLoggedIn() == true)
    {
        this.user = this.userService.getUser();
    }
    
      
  }

//Adding new comment------------------------------------------------------------------------------------------
   addCommentForm()
   {

    if(this.comment.content == '')
    {
      this.snack.open('Content should not be empty', 'ok');
      return;
    }

    this.commentService.addNewComment(this.comment, this.user.id, this.postId).subscribe({
      next : (data:any)=>
      {
        //this.comments = data;
        console.log(data);        
        Swal.fire('Success', 'you have successfully added new comment !! ', 'success');
      },
      error: (error)=>
      {
        console.log(error);        
        Swal.fire('Error', 'error with fetching comments data !!', 'error');
      }
    });
    
   }



}
