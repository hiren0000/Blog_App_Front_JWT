import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/service/post.service';
import Swal from 'sweetalert2';
import { CommentDialogueComponent } from '../comment-dialogue/comment-dialogue.component';
import {MatDialog, MatDialogModule } from '@angular/material/dialog';


@Component({
  selector: 'app-user-welcome',
  templateUrl: './user-welcome.component.html',
  styleUrls: ['./user-welcome.component.css']
})
export class UserWelcomeComponent implements OnInit 
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
              private dialog:MatDialog) {}

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
            
            this.postData = data.PostData;

          },
          error: (error)=>
          {
              console.log(error);
              Swal.fire('Error', 'Something went wrong  !! ', 'error');
            

          }
        });

      

  }

//Open dialouge box for comments---- this will be implemented later----
   /* openDialog() 
    {
      //sedning value with the dialog 
      const dialogRef = this.dialog.open(CommentDialogueComponent, {data: { postId : this.postIdForComm},});

      dialogRef.afterClosed().subscribe({
      next: (result:any)=>
       {
        console.log(`Dialog result: ${result}`);
       },
       error: (error:any)=>
       {
        console.log(error);
        
       }     
           
    });
    }  
*/
}
