import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Post } from 'src/app/interfaces/post';
import { ImgProcessingService } from 'src/app/service/img-processing.service';
import { PostService } from 'src/app/service/post.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit{

  
  postData =[
   {
    poId: '',
    poTitle: '',
    poImageName: '',
    poContent: '',
    poDate: '',
    postImages: [],
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
  }
  
  ];

  constructor(private postSer:PostService,
              private imgProcesSer:ImgProcessingService) {}

  ngOnInit(): void 
  {
    //getting list of all the post with his user and relevant category
    console.log('before main method !!');
      
  
          this.postSer.getListofPoststest().subscribe     
        ({
          next : (data:any) =>
          {
            
            //this.postData=data.PostData.content;
            this.postData = data.PostData;
            
            console.log(this.postData);

          },
          error: (error)=>
          {
            console.log(error);
            Swal.fire("Error !!", "error in fetching data", 'error');

          }

        });


  }

  


 //Deleting post by post id---------------------------------------------------------------------------------------- 
   deletePostById(postId:any)
    {  
      Swal.fire({
        icon: 'question',
        title: 'Are you sure???',
        confirmButtonText: 'Delete',
        showCancelButton: true,
      }).then((result)=>
      {

    //calling delete function
      if(result.isConfirmed)
      {
        this.postSer.deletePost(postId).subscribe({
          next: (data:any)=>
          { 
      //below function will help page to do the filter and get the accurate data after deletation 
            this.postData = this.postData.filter((post) => post.poId != postId)
            Swal.fire('Success', 'Quiz successfully deleted !!', 'success');
          },
          error: (error)=>
          {
            console.log(error);
            Swal.fire('Error', 'Something went wrong !! ', 'error');

          }
        });
      }


  });

  }

}




