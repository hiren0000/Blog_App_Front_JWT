import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

 
  coId = '';

  constructor(private route:ActivatedRoute) {}

  ngOnInit(): void {
     
      this.coId = this.route.snapshot.params[('coId')];      
      console.log(this.coId);

      //fetching Logged in user details--------------------------------------------------------------------------
      
      

  }

}
