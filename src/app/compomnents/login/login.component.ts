import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginServiceService } from 'src/app/service/login-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 loginData =
 {
    email:"",
    pass:"",
 };

  constructor(private snack:MatSnackBar, private login:LoginServiceService) { }

  ngOnInit(): void 
  {

  }

  public loginForm()
  {
    console.log("log in btn clicked ");

//Validations------------------------------------------------------------------------------------------
    if(this.loginData.email == null || this.loginData.email.trim() == '')   
    {
      this.snack.open('Email is required !!', 'ok');
      return;
    } 
    if(this.loginData.pass == null || this.loginData.pass.trim() == '')   
    {
      this.snack.open('Password is required !!', 'ok');
      return;
            
    }

//Generating token via request our server
    this.login.generateToken(this.loginData).subscribe({
      next: (data:any)=>
      {
        console.log(data);

        
      },
      error: (error)=>
      {
        console.log(error);
        Swal.fire('Error','Something wrong with server !! ', 'error');
        
      }
    });

      
  }

}
