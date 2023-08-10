import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/service/post.service';
import Swal from 'sweetalert2';
import { UserWelcomeComponent } from '../user-welcome/user-welcome.component';

@Component({
  selector: 'app-search-post-title',
  templateUrl: './search-post-title.component.html',
  styleUrls: ['./search-post-title.component.css']
})
export class SearchPostTitleComponent implements OnInit
{
  postTitle = '';

  postData =
  [
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
  ]

  constructor(private postService:PostService,
              private route:ActivatedRoute,
              private userm:UserWelcomeComponent) {}

  ngOnInit(): void 
  {
      //Fetching postTitle from the search bar
    this.postTitle = this.route.snapshot.params['keyword'];
  }


//Fetching the list of posts when users put some values in the search bar========================================
  serachBarForm()
  {
  
    this.postService.getListofPostsSearch(this.postTitle).subscribe
    ({
       next: (data:any)=>
       {
        console.log(data);
        
        this.postData = data.PostData;

       },
       error: (error)=>
       {
        console.log(error);
        Swal.fire('Error', 'Something went wrong !!', 'error');
        
       }
    })
  }

}
