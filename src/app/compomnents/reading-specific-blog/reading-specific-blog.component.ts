import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-reading-specific-blog',
  templateUrl: './reading-specific-blog.component.html',
  styleUrls: ['./reading-specific-blog.component.css']
})
export class ReadingSpecificBlogComponent implements OnInit
 {

  postId = '';

  constructor(private route:ActivatedRoute) {}

  ngOnInit(): void 
  {
    this.postId = this.route.snapshot.params['poId'];
      
    console.log(this.postId);
    
  }

}
