import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-side-bar',
  templateUrl: './user-side-bar.component.html',
  styleUrls: ['./user-side-bar.component.css']
})
export class UserSideBarComponent implements OnInit 
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
          
          this.categories=data;
          console.log(this.categories);

        },
        error: (error)=>
        {
          console.log(error);
          Swal.fire("Error !!", "error in fetching data", 'error');

        }

      });

    }

}
