import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from 'src/app/service/comment.service';
import { LoginServiceService } from 'src/app/service/login-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-comment-operations',
  templateUrl: './comment-operations.component.html',
  styleUrls: ['./comment-operations.component.css']
})
export class CommentOperationsComponent implements OnInit 
{

  postId = '';

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

  user = 
  {
    id : '',
    name: '',
    email: '',
    pass: '',
    about: '',
  }

  constructor(private route:ActivatedRoute,
              private commentService:CommentService,
              private userService:LoginServiceService) {}

  ngOnInit(): void 
  {
    this.postId = this.route.snapshot.params['poId'];
    console.log(this.postId);

//Fetching list of comments for specific Post with it;s user---------------------------------------------------
    this.commentService.getListOfCommByPo(this.postId).subscribe({
      next : (data:any)=>
      {
        this.comments = data;
      },
      error: (error)=>
      {
        Swal.fire('Error', 'error with fetching comments data !!', 'error');
      }
    });

//Get User Details----------------------------------------------------------------------------------------
    if(this.userService.isLoggedIn() == true)
    {
        this.user = this.userService.getUser();
    }
    
      
  }

}
