import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent implements OnInit {

  categories =[
    {
      coId:'',
      coName:'',
      coDes: '',
    },
  ];

 constructor(private category:CategoryService){}


ngOnInit(): void{

  this.category.getListOfCategories().subscribe
  ({
    next : (data:any) =>
    {
      
      this.categories=data.category;
      console.log(this.categories);

    },
    error: (error)=>
    {
      console.log(error);
      Swal.fire("Error !!", "error in fetching data", 'error');

    }

  });

 }

//Delete Category===============================================================================================
  deleteCat(coId:any)
  {
    //Deleting post by post id---------------------------------------------------------------------------------------- 
     
     Swal.fire({
       icon: 'question',
       title: 'Are you sure???',
       confirmButtonText: 'Delete',
       showCancelButton: true,
     }).then((result)=>
     {

   //calling delete function
     if(result.isConfirmed)
     {
       this.category.deleteCate(coId).subscribe({
         next: (data:any)=>
         { 
     //below function will help page to do the filter and get the accurate data after deletation 
           this.categories = this.categories.filter((category) => category.coId != coId)
           Swal.fire('Success', 'Category successfully deleted !!', 'info');
         },
         error: (error)=>
         {
           console.log(error);
           Swal.fire('Error', 'Something went wrong !! ', 'error');

         }
       });
     }


    });

  }
  


}
