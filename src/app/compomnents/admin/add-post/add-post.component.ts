import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';
import { LoginServiceService } from 'src/app/service/login-service.service';
import { PostService } from 'src/app/service/post.service';
import Swal from 'sweetalert2';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Post } from 'src/app/interfaces/post';
import { FileHandler } from 'src/app/interfaces/FileHandler';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  public Editor = ClassicEditor;
  

  userData = 
  {
      id: 0,
      name: "",
      email:"",
      pass:"",
      about: "",
    
  };

  post:Post =
    {
    
     poTitle: '',
     poImageName: '',
     poContent: '',
     poDate: '',
     postImages: [],

     category: 
     {
       coId: 0,
       coName: '',
       coDes: '',       
     },

     user:
     {
        id: 0,
        name: '',
     },
    
    
   }

   categories = 
   [
    {
      coId: 0,
      coName:'',
      coDes: '',
    },
   ];

  constructor(private route:ActivatedRoute,
              private userService:LoginServiceService,
              private postService:PostService,
              private categoryService: CategoryService,
              private sanitizer:DomSanitizer) {}

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

        //sedning fromData type to backend with images
        const postFormData = this.prepareFormData(this.post);

        this.postService.AddNewPost(postFormData, this.userData.id, this.post.category.coId).subscribe({
          next: (data:any)=>
          {
            //here we can see now Server sends the data in similar format only....
            console.log(data);
           // console.log(data.Status);
           // console.log(data.message);
            Swal.fire('Success', 'Post added successfully ', 'success');
            
          },
          error: (error: HttpErrorResponse)=>
          {
            console.log(error);
            Swal.fire('Error', 'Something went wrong at server side !!', 'error');
          }
        });
      }

//Image Processing area====================8888888***************************************
       onFileSelected(event:any)  
       {
        if(event.target.files)
        {
          const localfile = event.target.files[0];

          const fileHandler:FileHandler =
          {
              file: localfile,
              url: this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(localfile)) 
          }

          this.post.postImages.push(fileHandler);

        }
       }

//Converting Post to Form Data type so can send it to the backend======**********************=***********************===============
        prepareFormData(post:Post): FormData
        {
          const formData = new FormData();

          formData.append(
            'postDto',
            new Blob([JSON.stringify(post)], {type: 'application/json'})      
          );

          for(var i=0;i<post.postImages.length;i++)
          {
            formData.append(
              'imageFile',
              post.postImages[i].file,
              post.postImages[i].file.name
            );
          }

          return formData;

        }       

}
