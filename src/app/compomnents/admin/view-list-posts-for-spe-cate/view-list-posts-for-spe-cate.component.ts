import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/service/post.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-list-posts-for-spe-cate',
  templateUrl: './view-list-posts-for-spe-cate.component.html',
  styleUrls: ['./view-list-posts-for-spe-cate.component.css']
})
export class ViewListPostsForSpeCateComponent implements OnInit {

  catId = '';
  catName = '';

  posts =[
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

  constructor(private route:ActivatedRoute,
              private postSer:PostService){}

    ngOnInit(): void 
    {
      this.catId = this.route.snapshot.params[('coId')];
      this.catName = this.route.snapshot.params[('coName')];

      console.log(this.catId);
      console.log(this.catName);
      
     
               
         this.postSer.getListofPostsByCat(this.catId).subscribe
       ({
         next : (data:any) =>
         {
           
           this.posts=data.PostData;
           console.log(data);
           
           console.log(this.posts);
     
         },
         error: (error)=>
         {
           console.log(error);
           Swal.fire("Error !!", "error in fetching data", 'error');
     
         }
     
       });
           
       }



//Deleting post by post id ----------------------------------------------------------------------------------------------
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
              console.log(data);
              this.posts = this.posts.filter((post) => post.poId != postId)
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


