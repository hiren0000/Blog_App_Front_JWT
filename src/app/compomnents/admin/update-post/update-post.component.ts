import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';
import { PostService } from 'src/app/service/post.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})

export class UpdatePostComponent implements OnInit 
{

  constructor(private route:ActivatedRoute,
    private postService:PostService,
     private catService:CategoryService,
     private router:Router){}
  
  poId='';

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

//Fetching single Quiz
      this.postService.getSinglePost(this.poId).subscribe({
        next: (data:any)=>
        {
          this.post=data;
          console.log(this.post);
        },
        error :(error)=>
        {
          console.log(error);
          Swal.fire('Error', 'Something went wrong !!', 'error');

        }
      });

//Fethcing categoris 
      this.catService.getListOfCategories().subscribe({
        next: (data:any)=>
        {
          this.categories=data;
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
        this.router.navigate(['/admin-dash/view-list-posts'])
      });

      },
      error: (error)=>
      {
        console.log(error);
        Swal.fire('Error', 'Something went wrong !!', 'error');

      }
    });
    
  }


}
