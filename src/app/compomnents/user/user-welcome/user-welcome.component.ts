import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/service/post.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-welcome',
  templateUrl: './user-welcome.component.html',
  styleUrls: ['./user-welcome.component.css']
})
export class UserWelcomeComponent implements OnInit 
{
  cid='';

  postData =[
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
 

  constructor(private route:ActivatedRoute, private postService:PostService) {}

  ngOnInit(): void 
  {
     this.route.params.subscribe((params)=>
     {
      this.cid = params['coId'];

      
      if(this.cid == '0')
      {
        //console.log("show all posts");
//--------------Getting All the List of posts------------------------------------------------------------------------------     
        this.postService.getListofPosts().subscribe({
          next: (data:any)=>
          {
            this.postData = data.content;
            console.log(data);
            
          },
          error: (error)=>
          {
            console.log(error);
            Swal.fire('Error', 'Something went wrong !! ', 'error');
          }
        });
      }
      //------------------------------------------------------------------------------------------
       
      
//Fetching posts which is bleongs to specific category-----------------------------------------------------------      
      else
      {
        console.log('show specific posts by category ');
        
        this.postService.getListofPostsByCat(this.cid).subscribe({
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
        });
       
        
      }

     })
     

  }

}
