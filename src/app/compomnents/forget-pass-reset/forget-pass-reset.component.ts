import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { LoginServiceService } from 'src/app/service/login-service.service';

@Component({
  selector: 'app-forget-pass-reset',
  templateUrl: './forget-pass-reset.component.html',
  styleUrls: ['./forget-pass-reset.component.css']
})
export class ForgetPassResetComponent implements OnInit 
{

  retypePass= '';

  id = '';

  user = 
  {
    id: '',
    name: '',
    password: '',
  }  

  constructor(private route:ActivatedRoute,
              private snack:MatSnackBar,
              private login:LoginServiceService) {}

  ngOnInit(): void 
  {
     console.log('u r inside the Reset password page..');

     this.route.queryParams.subscribe
     ({
      next : (data:any)=>
      {
        this.user.id = data.userData;
        console.log(this.user.id);        
      }

    })  
      
  }

  //changing the password---------------------
  ForgetPassResetForm()
  {
    if(this.user.password != this.retypePass)
    {
      this.snack.open('Password must be equal, try again !!');
      return;
    }

    if(this.id == null || this.id == undefined)
    {
      this.snack.open('please use the OTP, and follow the steps to reset your password !!', 'X');
      return;
    }

    //function to change the password from backend------------------------------------------------------
    this.login.updatePassForForgetFun(this.id, this.user).subscribe
    ({
      next: (data:any)=>
      {
        console.log(data);
        this.snack.open('Password successfully udpated !!', 'OK');  
      },
      error: (error)=>
      {
        console.log(error);
        this.snack.open('Somenthing went wrong with changing password !!', "X");
      }

    });
    

  }

}
