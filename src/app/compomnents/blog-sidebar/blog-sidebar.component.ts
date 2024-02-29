import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-blog-sidebar',
  templateUrl: './blog-sidebar.component.html',
  styleUrls: ['./blog-sidebar.component.css']
})

export class BlogSidebarComponent implements OnInit
{
  categories =[
    {
      coId:'',
      coName:'',
      coDes: '',
    },
  ];

  constructor(private category:CategoryService){}



  ngOnInit(): void
  {

//Fetching all the categories--------------------------------------------------------------------------------------  
  
      this.category.getListOfCategories().subscribe
      ({
        next : (data:any) =>
        {
          
          this.categories = data.category;
          console.log(data);

        },
        error: (error)=>
        {
          console.log(error);
          Swal.fire("Error !!", "error in fetching data", 'error');

        }

      });

    }

}
