import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SingupService } from 'src/app/service/singup.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  data= 
  {
    id: '',
    name: "",
    email:"",
    pass:"",
    about: "",
  }

  userData =
  {
    
      id: '',
      name: "",
      email:"",
      pass:"",
      about: "",
    
  }

  constructor(private signup:SingupService, private snak:MatSnackBar, private router:Router) { }

  ngOnInit(): void {
  }

  doSubmit()
  {
    console.log("try to submit signup form"); 
    console.log("Data", this.data);
    
    if(this.data.name=="" || this.data.email=="" || this.data.pass=="" || this.data.about=="")
    {
      this.snak.open("fields should not be empty","Ok" );
      return
    }
    
    this.signup.register(this.data).subscribe
    ({ next: (response:any)=>
      {
        console.log(response);
        this.userData = response;
        this.snak.open("User has successfully saved in database","Ok" );
        this.router.navigate(['/otp-verification/'],{queryParams:{order:this.userData.id}});
      },
      error: (error)=>
      {
        console.log(error);
        this.snak.open("Something wrong with saving user data !!","Ok" );
      }
  }); 
          
        
  }
}