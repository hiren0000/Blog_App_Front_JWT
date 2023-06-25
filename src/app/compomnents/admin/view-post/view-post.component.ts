import { Component, OnInit } from '@angular/core';
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
    poid: '',
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
      email: '',
      pass: '',
      about: '',
    },
  },
  ];

  constructor(private postSer:PostService) {}

  ngOnInit(): void 
  {
    //getting list of all the post with his user and relevant category

    this.postSer.getListofPosts().subscribe({
      next: (data:any)=>
      {
        this.postData=data;
      },
      error: (error)=>
      {
        console.log(error);
        Swal.fire("Error !!", "error in fetching data", 'error');
        
      }
    });
      
  }



}
