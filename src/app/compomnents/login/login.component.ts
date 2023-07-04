import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
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

  constructor(private snack:MatSnackBar, private login:LoginServiceService, private router:Router) { }

  ngOnInit(): void 
  {

  }

   loginForm()
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

//Generating token via request our server====================================================
    this.login.generateToken(this.loginData).subscribe({
      next: (data:any)=>
      {
        
        //console.log(data);
        console.log('success token');
        
        //Login----------------------------------------------setting token into the local storage 
        this.login.loginUser(data.token);
        
        

        
         //Getting current user data from DB=========================================================
         this.login.currentUser().subscribe({
          next: (user:any)=>
          {
            //console.log(user);

            //saving user data into the localstorage-----------------------------
            this.login.setUser(user);
            
             //Redirecting to the Admin-dash----------------------------
            if(this.login.getUserRole() == 'ADMIN')
            {
              this.router.navigate(['admin-dash']);
            }
             //Redurecting to the USer-dash------------------
             else if(this.login.getUserRole()== 'NORMAL')
             {
              this.router.navigate(['user-dash/home']);
             }
             else
             {
              this.login.logOut();
              location.reload();
             }
            
          },
          error: (error)=>
          {
            console.log(error);
            Swal.fire('Error','error fetching with current user data !! ', 'error');
          }

         });
        
      },
      error: (error)=>
      {
        console.log(error);
        Swal.fire('Error','Something wrong with server !! ', 'error');
        
      }
    });

      
  }

}
