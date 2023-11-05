import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';
import { LoginServiceService } from 'src/app/service/login-service.service';
import { PostService } from 'src/app/service/post.service';
import Swal from 'sweetalert2';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  public Editor = ClassicEditor;
  

  userData = 
  {
      id: '',
      name: "",
      email:"",
      pass:"",
      about: "",
    
  };

  post =
    {
    
     poTitle: '',
     poImageName: '',
     poContent: '',
     poDate: '',
     category: 
     {
       coId: '',
       
     },
     user: 
     {
       id: '',
     }, 
    
   };

   categories = 
   [
    {
      coId:'',
      coName:'',
      coDes: '',
    },
   ];

  constructor(private route:ActivatedRoute,
              private userService:LoginServiceService,
              private postService:PostService,
              private categoryService: CategoryService) {}

  //-----------------------------------------------
  ngOnInit(): void {
     
      // this.coId = this.route.snapshot.params[('coId')];      
      // console.log(this.coId);

 //Fetching list of categories so users can select specific category while creating new post     
      this.categoryService.getListOfCategories().subscribe({
        next: (data:any)=>
        {
          this.categories = data.category;      
          
        },
        error: (error)=>
        {
          console.log(error);
          Swal.fire('Error', 'Something went wrong at server side !!', 'error');
        }
      })


      //fetching Logged in user details--------------------------------------------------------------------------
      if(this.userService.isLoggedIn() == true)
      {
        this.userData = this.userService.getUser();
      }
      

  }

//Adding New Post for specific USER and Category-----------------------------------------------------------------------------------------
      addPostForm()
      {
        this.postService.AddNewPost(this.post, this.userData.id, this.post.category.coId).subscribe({
          next: (data:any)=>
          {
            //here we can see now Server sends the data in similar format only....
            console.log(data);
           // console.log(data.Status);
           // console.log(data.message);
            Swal.fire('Success', 'Post added successfully ', 'success');
            
          },
          error: (error)=>
          {
            console.log(error);
            Swal.fire('Error', 'Something went wrong at server side !!', 'error');
          }
        });
      }

}
