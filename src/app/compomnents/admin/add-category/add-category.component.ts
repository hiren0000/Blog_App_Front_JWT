import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/service/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {

  category={
    coName: '',
    coDes: '',

  };

  constructor(private categoryService:CategoryService, private snack:MatSnackBar){}

  public addCategoryForm()
  {

    if(this.category.coDes==null &&  this.category.coName==null)
    {
      this.snack.open("Fields are required !!", "ok");
      return;
    }

    else if(this.category.coName.trim()=='' || this.category.coName==null)
    {
      this.snack.open("Title Required !!", "ok");
      return;
    }

    else if(this.category.coDes.trim()=='' || this.category.coDes==null)
    {
      this.snack.open("Description Required !!", "ok");
      return;
    }


    //Adding category
    this.categoryService.addNewCate(this.category).subscribe
    ({ 
      next: (data:any)=>
      {
        Swal.fire("Success !!", "Category is successfully added", "success");
        


      },
      error: (error)=>
      {
        console.log(error);
        Swal.fire('Error !!', 'Somethign went wrong !! ', 'error');

      } 

    });

    

  }

}
