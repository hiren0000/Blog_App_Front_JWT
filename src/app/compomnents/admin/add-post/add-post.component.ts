import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  uId ='';
  coId = '';

  constructor(private route:ActivatedRoute) {}

  ngOnInit(): void {
      this.uId = this.route.snapshot.params[('id')];
      this.coId = this.route.snapshot.params[('coId')];

      console.log(this.uId);
      console.log(this.coId);
      
      

  }

}
