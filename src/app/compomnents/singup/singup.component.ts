import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SingupService } from 'src/app/service/singup.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  data= {
    name: "",
    email:"",
    pass:"",
    about: "",
  }

  constructor(private signup:SingupService, private snak:MatSnackBar ) { }

  ngOnInit(): void {
  }

  doSubmit()
  {
    console.log("try to submit signup form"); 
    console.log("Data", this.data);
    
    if(this.data.name=="" || this.data.email=="" || this.data.pass=="" || this.data.about=="")
    {
      this.snak.open("fields should not be empty","Ok" );
    }
    
    this.signup.register(this.data);
       
        

   
    
  }

}
