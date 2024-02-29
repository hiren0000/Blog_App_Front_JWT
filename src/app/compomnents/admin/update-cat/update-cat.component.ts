import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Route } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-cat',
  templateUrl: './update-cat.component.html',
  styleUrls: ['./update-cat.component.css']
})
export class UpdateCatComponent implements OnInit
{
 
  catId = '';

  category=
  {
    coId: '',
    coName: '',
    coDes: '',

  };

  constructor(private route:ActivatedRoute,
              private catService:CategoryService,
              private snack:MatSnackBar) {}

  ngOnInit(): void 
  {

    this.catId = this.route.snapshot.params[('coId')];
    console.log(this.catId);

  //fetcing single category=================================
    this.catService.getSingleCat(this.catId).subscribe
    ({
      next: (data:any)=>
      {
         this.category = data.category;
         console.log(this.category);
         
      },
      error: (error)=>
      {
        console.log(error);
        Swal.fire('Errro', 'Something went wrong with fetching this category', 'error');
        
      }

    })
    
      
  }

//Updating-category form -----------------------------------------------------------------------------
    updateCatForm()
    {

        if(this.category.coName.trim()=='' || this.category.coName==null)
        {
          this.snack.open("Title Required !!", "ok");
          return;
        }

        if(this.category.coDes.trim()=='' || this.category.coDes==null)
        {
          this.snack.open("Description Required !!", "ok");
          return;
        }

        //form-submission
        this.catService.updateCat(this.category, this.catId).subscribe
        ({
          next: (data:any)=>
          {
            Swal.fire('Successful', 'Updated Category successfully !', 'success');
             this.category = data.category;
             console.log(this.category);
             
          },
          error: (error)=>
          {
            console.log(error);
            Swal.fire('Error', 'Something went wrong with updating category', 'error');
            
          }
        })
    }


}
