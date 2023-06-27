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
           
           this.posts=data;
           console.log(this.posts);
     
         },
         error: (error)=>
         {
           console.log(error);
           Swal.fire("Error !!", "error in fetching data", 'error');
     
         }
     
       });
           
       }
     
     
     


}


