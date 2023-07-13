import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comment-operations',
  templateUrl: './comment-operations.component.html',
  styleUrls: ['./comment-operations.component.css']
})
export class CommentOperationsComponent implements OnInit 
{

  postId = '';

  constructor(private route:ActivatedRoute) {}

  ngOnInit(): void 
  {
    this.postId = this.route.snapshot.params['poId'];
    console.log(this.postId);
    
      
  }

}
