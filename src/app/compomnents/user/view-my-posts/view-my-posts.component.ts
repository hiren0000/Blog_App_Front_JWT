import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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

  keyword = '';

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
              private postService: PostService,
              private snack:MatSnackBar){}

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
          console.log(data);        
          this.postData = data.PostData;
          console.log(this.postData);
          
        },
        error: (error)=>
        {
          console.log(error);
          Swal.fire('Error', 'Something went wrong  !! ', 'error');
          
        }
      })
    } 
    
//Fetching the list of posts when users put some values in the search bar=======================================
searchForm()
{
  console.log(this.keyword);
  

  if(this.keyword == '')
      {
        this.snack.open('Please type something in the search bar !!', 'X');
        return;
      }
      

      this.postService.getListofPostsSearch(this.keyword).subscribe
      ({
        next: (data:any)=>
        {
          console.log(data);
          
          this.postData = data;

        },
        error: (error)=>
        {
            console.log(error);
            Swal.fire('Error', 'Something went wrong  !! ', 'error');
          

        }
      });

    

}    

}
