import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { PostService } from 'src/app/service/post.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reading-specific-blog',
  templateUrl: './reading-specific-blog.component.html',
  styleUrls: ['./reading-specific-blog.component.css']
})
export class ReadingSpecificBlogComponent implements OnInit
 {

  postId = '';

  postData:any =
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
    
   
  }

  constructor(private route:ActivatedRoute,
              private postSer:PostService,
              ) {}

  ngOnInit(): void 
  {
    this.postId = this.route.snapshot.params['poId'];
      
    console.log(this.postId);
    this.findPostById();
    
  }

 //finding single post by id to read more=-===============================-=-=-=-=-=-= 
  findPostById()
  {
      this.postSer.getSinglePost(this.postId).subscribe
      ({
        next: (data:any)=>
        {
            this.postData = data.PostData;
        },
        error: (error)=>
        {
          console.log(error);
          Swal.fire('Error', 'Post not found !', 'error');
          
        }
        
      });
  }

}
