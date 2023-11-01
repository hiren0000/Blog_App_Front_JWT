import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { EnDecServiceService } from 'src/app/service/en-dec-service.service';
import { LoginServiceService } from 'src/app/service/login-service.service';
import { SingupService } from 'src/app/service/singup.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit 
{

  //User Inputing via Registre form 
  data= 
  {
    
    name: "",
    email:"",
    pass:"",
    about: "",
  }
  //=========finished here.

  userData =
  {
    
      id: '',
      name: "",
      email:"",
      pass:"",
      about: "",
    
  }

  loginDatas = 
  {
    email: '',
    pass:'',

  }

  decryptPass = '';

  user =
  {
    
      id: '',
      name: "",
      email:"",
      pass:"",
      about: "",
    
  }

  constructor(private signup:SingupService,
              private snak:MatSnackBar,
              private router:Router,
              private login:LoginServiceService,
              private enDecrSer:EnDecServiceService) { }

  ngOnInit(): void 
  {
  }

  doSubmit()
  {
    console.log("try to submit signup form"); 
    console.log("Data", this.data);
    
    if(this.data.name=="" || this.data.email=="" || this.data.pass=="" || this.data.about=="")
    {
      this.snak.open("fields should not be empty","Ok" );
      return;
    }
    
//Registering new user ==============================================================================================    
    this.signup.register(this.data).subscribe
    ({ next: (response:any)=>
      {
        console.log(response);
        this.userData = response;
        this.snak.open("User has successfully saved in database","Ok" );

//trying to implement login attempts-------------------------------------------------------------------------
  //OTP will be sent to user's email address....without OTP can not visit home page...
        
        
        this.loginDatas.email = this.data.email;
        this.loginDatas.pass = this.data.pass;

        this.decryptPass = this.enDecrSer.get('password',this.userData.pass);
        console.log(this.userData.pass);
        
        console.log(this.decryptPass);

        console.log(this.loginDatas);

        this.login.generateToken(this.loginDatas).subscribe
        ({
          next: (dataForLog:any)=>
          {
            
            //console.log(data);
            console.log('success token');
            
            //Login----------------------------------------------setting token into the local storage 
            this.login.loginUser(dataForLog.token);
            
            
    
            
     //Getting current user data from DB=========================================================
             this.login.currentUser().subscribe
             ({
              next: (user:any)=>
              {
               
    
      //saving user data into the localstorage-----------------------------==========================
                this.login.setUser(user);
      //Redirecting to the Admin-dash--------------------------------------------------------------------
                /*if(this.login.getUserRole() == 'ADMIN')
                {
                  this.router.navigate(['admin-dash']);
                }*/

     //Redirecting to the OTP-verification page.-------------------------------------------------------------------
                 if(this.login.getUserRole()== 'NORMAL')
                 {
                  this.router.navigate(['/otp-verification/'],{queryParams:{order:this.userData.id}});
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
          
            }, //Getting userdata from DB finished here............................   

            error: (error)=>
            {
              console.log(error);              
              this.snak.open('Some issues with generating token !!  ', 'X');

            }
          });
            


      
      }, // Generating token completed here..........
      error: (error)=>
      {
        console.log(error);
        this.snak.open("Something wrong with saving user data !!","Ok" );
      }
    });
    }
  

}

    
          
        
  
 
