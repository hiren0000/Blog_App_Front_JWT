import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
import { PostService } from 'src/app/service/post.service';
import Swal from 'sweetalert2';
import { LoginComponent } from '../../login/login.component';
import { LoginServiceService } from 'src/app/service/login-service.service';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-user-add-post',
  templateUrl: './user-add-post.component.html',
  styleUrls: ['./user-add-post.component.css']
})
export class UserAddPostComponent implements OnInit 
{

  public Editor = ClassicEditor;

  user = 
  {
      id: '',
      name: "",
      email:"",
      pass:"",
      about: "",
  };

  post =
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
    };

    categories = 
    [
     {
       coId:'',
       coName:'',
       coDes: '',
     },
    ];

    constructor(private postService:PostService,
                private categoryService:CategoryService,
                private userService:LoginServiceService) {}

    ngOnInit(): void 
    {
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
        this.user = this.userService.getUser();
      }
      

  }

//Adding New Post for specific USER and Category-----------------------------------------------------------------------------------------
addPostForm()
{
  this.postService.AddNewPostforUser(this.post, this.user.id, this.post.category.coId).subscribe({
    next: (data:any)=>
    {
      console.log(data);
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
