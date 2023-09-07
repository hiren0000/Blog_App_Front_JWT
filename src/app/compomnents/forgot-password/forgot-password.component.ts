import { Component, ErrorHandler, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/service/login-service.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit
{

  email = '';

  constructor(private loginSer:LoginServiceService,
              private router:Router,
              private snack:MatSnackBar) {}

  ngOnInit(): void 
  {
      
  }

  ForgetPassForm()
  {  
    //validaton for the field-------------------------------------------------------------------------------
      if(this.email == '' || this.email == null || this.email == undefined)
      {
        this.snack.open("Email should not be empty !! ");
        return;
      }

    //let's check user is in db or not-------------------------------------------------------------------
     this.loginSer.forgetPass(this.email).subscribe
     ({
      next: (data:any)=>
      {
        console.log(data);
        
        if(data.user == null)
        {
          console.log(data);
                
          return;           
                  
        }
        else
        {
        this.router.navigate(['/otp-verification'],{queryParams:{forgetPass:'true'}});
        }
      },
      error: (error)=>
      {
        console.log(error);
        
      }

     })
  }

}
