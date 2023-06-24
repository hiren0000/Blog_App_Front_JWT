import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-list-posts-for-spe-cate',
  templateUrl: './view-list-posts-for-spe-cate.component.html',
  styleUrls: ['./view-list-posts-for-spe-cate.component.css']
})
export class ViewListPostsForSpeCateComponent implements OnInit {

  catId = '';
  catName = '';

  constructor(private route:ActivatedRoute){}

    ngOnInit(): void 
    {
      this.catId = this.route.snapshot.params[('coId')];
      this.catName = this.route.snapshot.params[('coName')];

      console.log(this.catId);
      console.log(this.catName);
      
      


    }

}
