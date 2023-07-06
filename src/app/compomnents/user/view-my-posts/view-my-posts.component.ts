import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/service/login-service.service';
import { PostService } from 'src/app/service/post.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-view-my-posts',
  templateUrl: './view-my-posts.component.html',
  styleUrls: ['./view-my-posts.component.css']
})
export class ViewMyPostsComponent implements OnInit 
{

  postData =
  [
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
     comments :[
       {
         coId: '',
         content: '',
       }
     ]
   },
   
   ];

   user =
     {
       id: '',
       name: '',
       email:'',
       pass: '',
       about: '',
     }; 

  constructor(private userService:LoginServiceService,
              private postService: PostService){}

  ngOnInit(): void 
  {
      //Fetching User so we can provide userId to fetch relevant posts for that user-----
      if(this.userService.isLoggedIn() == true)
      {
         this.user = this.userService.getUser();
      }
      else
      {
        console.log("User is not logged in----");
        return;
      }

      //calling method to get list of posts by user
      this.getPostforUser();

  }

// Fetching list of posts which belongs to specific user
    getPostforUser()
    {
      this.postService.getListofPostsByUser(this.user.id).subscribe
      ({
        next: (data:any)=>
        {
          this.postData = data;
          console.log(this.postData);
          
        },
        error: (error)=>
        {
          console.log(error);
          Swal.fire('Error', 'Something went wrong  !! ', 'error');
          
        }
      })
    }  

}
