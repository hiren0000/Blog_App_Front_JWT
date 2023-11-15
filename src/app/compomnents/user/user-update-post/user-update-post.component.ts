import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { windowTime } from 'rxjs';
import { CategoryService } from 'src/app/service/category.service';
import baseUrl from 'src/app/service/helper';
import { PostService } from 'src/app/service/post.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-update-post',
  templateUrl: './user-update-post.component.html',
  styleUrls: ['./user-update-post.component.css']
})
export class UserUpdatePostComponent implements OnInit 
{

  constructor(private route:ActivatedRoute,
    private postService:PostService,
     private catService:CategoryService,
     private router:Router,
     private snack:MatSnackBar,
     private http:HttpClient){}
  
  poId='';

  fileName = '';

  postImage = '';

  imageData = "";
  


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

  ngOnInit(): void 
  {
    //getting qid through URL
      this.poId = this.route.snapshot.params['poId'];
//      alert(this.qid);

//Fetching single Post=====================================================================================
      this.postService.getSinglePost(this.poId).subscribe({
        next: (data:any)=>
        {
          this.post=data.PostData;
          console.log(this.post);
          console.log(this.post.poImageName);

        },
        error :(error)=>
        {
          console.log(error);
          Swal.fire('Error', 'Something went wrong !!', 'error');

        }
      });

//Fethcing categoris============================================================================================ 
      this.catService.getListOfCategories().subscribe({
        next: (data:any)=>
        {
          this.categories=data.category;
        },
        error: (error)=>
        {
          console.log(error);
          Swal.fire('Error', 'Something went wrong !!', 'error');

        }
      });
  
  }

  //Updating existing quiz data
  public updatePostForm()
  {

//Validation needs to put :: later will do
    

    this.postService.updatePost(this.post, this.post.category.coId, this.poId).subscribe({
      next: (data:any)=>
      {
        Swal.fire('Success', 'Successfully updated quiz ', 'success').then((e)=>{
        
        this.router.navigate(['/user-dash/view-my-posts'])
      });

      },
      error: (error)=>
      {
        console.log(error);
        Swal.fire('Error', 'Something went wrong !!', 'error');

      }
    });
    
  }

//Selecting File from PC function---AND THAT WILL AUTOMATICALLY UPLOADED IN THE SERVER----------------------------------------------------------------------
      onFileSelected(event:any) 
      {
        
        const file:File = event.target.files[0];

        if (file) {

            this.fileName = file.name;

            const formData = new FormData();
          
            formData.append("image", file);

        this.http.
        post(`${baseUrl}/api/category/${this.post.category.coId}/post/file-upload/${this.poId}`, formData).subscribe({
          next: (data:any)=>
          {
            console.log(data);
            console.log("successfully image added");
            Swal.fire("Success", 'Post-Image successfully uploaded !!', 'success');
          
            //trying to fetch image from DB----------------------------------------------------------
          if(this.post.poImageName != '')
          {
            this.postService.getImage(data.poImageName).subscribe
            ({
              next: (imageResponse:any)=>
              {
                console.log(imageResponse);
                this.imageData = imageResponse;
                
              },
              error: (error)=>
              {
                console.log(error);
                Swal.fire('Error', 'Something went wrong fetching image !!', 'error');
      
              }
            });
          }  

          },
          error: (error)=>
          {
            console.log(error);
            Swal.fire('Error', 'Something went wrong with uploading image !!', 'error');

          }
        });

           // upload$.subscribe();
        }
      }  
  
//Uploading file into the database--NOT WORKING ------------------------------------------------------------------------------
   /* uploadImageSave()
    {
      if(this.postImage == '')
      {
        this.snack.open('Please select an image !!', 'X');
        return;
      

      this.postService.uploadImg(this.postImage, this.post.category.coId, this.poId).subscribe
      ({
        next: (data:any)=>
        {
          Swal.fire("Success", 'Post-Image successfully uploaded !!', 'success');
        },
        error: (error)=>
        {
          console.log(error);
          Swal.fire('Error', 'Something went wrong !!', 'error');

        }
      });
     

    }*/




}
