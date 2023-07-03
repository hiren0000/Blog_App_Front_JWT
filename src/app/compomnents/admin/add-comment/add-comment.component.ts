import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from 'src/app/service/comment.service';
import { LoginServiceService } from 'src/app/service/login-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})

export class AddCommentComponent implements OnInit
{
  postId = '';

 
  comment = 
  
    {
      coId: '',
      content: '',   
     
    };

   user =
    {
      id: '',
      name: '',
      email: '',
    };
  

  constructor(private route:ActivatedRoute,
              private commentSerice:CommentService,
              private userService:LoginServiceService) {}

  ngOnInit(): void 
  {
      this.postId = this.route.snapshot.params['poId'];

      //Fetch logged in user-details so only logged user can add new comment
      if(this.userService.isLoggedIn() == true)
      {
        this.user = this.userService.getUser();
      }
      else
      {
        Swal.fire('Error', 'First you have to login !! ', 'error');
        return;
      }
  }

//Adding new comment function by given postId  
  addCommentForm()
  {
    this.commentSerice.addNewComment(this.comment, this.user.id, this.postId).subscribe({
      next: (data:any)=>
      {
        this.comment=data;
        Swal.fire('Success', 'successfully added comment  ', 'success');

      },
      error: (error)=>
      {
        console.log(error);
        Swal.fire('Error', 'error with fetching data !! ', 'error');
        
      }
    });    
    
  }
}
