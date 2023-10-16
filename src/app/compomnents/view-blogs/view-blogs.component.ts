import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/app/service/post.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-blogs',
  templateUrl: './view-blogs.component.html',
  styleUrls: ['./view-blogs.component.css']
})
export class ViewBlogsComponent 
{

  cid='';

  keyword = "";
  

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
 

  constructor(private route:ActivatedRoute,
              private postService:PostService,
              private snack:MatSnackBar,
              private dialog:MatDialog,
              private router:Router) {}

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
            this.postData = data.PostData.content;
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
            this.postData = data.PostData;
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


//Fetching the list of posts when users search something in the search bar=======================================
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
            
            this.postData = data.PostData;

          },
          error: (error)=>
          {
              console.log(error);
              Swal.fire('Error', 'Something went wrong  !! ', 'error');
            

          }
        });     

  }

//when press comment button throw dialouge fir login navigation-=========================================
   public adviseToLogin()
    {
      Swal.fire({
        icon: 'info',
        title: 'Login to add comment !!',
        confirmButtonText: 'Yes',
        showCancelButton: true,
      }).then((result)=>
      {

    //calling delete function
      if(result.isConfirmed)
      {
        this.router.navigate(['login']);
      }
      });
   }

   


}
