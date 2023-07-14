
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-comment-dialogue',
  templateUrl: './comment-dialogue.component.html',
  styleUrls: ['./comment-dialogue.component.css']
})
export class CommentDialogueComponent implements OnInit 
{

  pId = '';

  comments = 
  [
    {
      coId: '',
      content: '',
      user:
      {
        id: '',
        name: '',
        email: '',
      },
     
    }
  ];

  constructor(@Inject(MAT_DIALOG_DATA) public data: {postId: string},
              private route:ActivatedRoute) {}

  ngOnInit(): void 
  {
      this.pId = this.route.snapshot.params['poId'];
      //console.log(this.pId);
      console.log(this.data.postId);
      
  }


}
