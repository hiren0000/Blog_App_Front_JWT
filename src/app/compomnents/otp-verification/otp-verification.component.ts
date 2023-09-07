import { Component, OnInit} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { EnDecServiceService } from 'src/app/service/en-dec-service.service';
import { LoginServiceService } from 'src/app/service/login-service.service';
import { SingupService } from 'src/app/service/singup.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.component.html',
  styleUrls: ['./otp-verification.component.css']
})
export class OtpVerificationComponent implements OnInit
{
  otp = '';

  userId:any = '';

  forgetPassword = '';

  localToken:any

  user = 
  {  
   
      id: '',
      name: "",
      email:"",
      pass:"",
      about: "",
      otp: '',
    
  }

  
  constructor(private snack:MatSnackBar,
              private route:ActivatedRoute,
              private login:LoginServiceService,
              private router:Router,
              private enDecrSer:EnDecServiceService,
              private singServ:SingupService) {}

  ngOnInit(): void 
  {
    /*this.snack.open('Please check your email For the OTP', 'X');

    //this.userId = this.route.snapshot.params['id'];*/
    this.route.queryParams.subscribe
    ({
      next : (data:any)=>
      {
        this.forgetPassword = data.forgetPass;
        console.log(this.forgetPassword);        
      }

    })  
    
    
      
  }

 

//OtpForm to verify email OTP----------------------------------------------------------------------------------  
  otpForm()
  {

   
    console.log('OTP are equal');
    
      this.localToken = this.login.getToken();
      console.log(this.localToken);
      console.log(this.user);
     
   if(this.forgetPassword != 'true' || this.forgetPassword == null || this.forgetPassword == undefined)
   {
      //sending OTP to backend for verification----------------------------------------------------------------
      this.singServ.otpVerifyByOtp(this.otp).subscribe
      ({
         next: (data:any)=>
         {
           console.log(data);         
           this.router.navigate(['user-dash/category/0']);
         
         },
         error: (error)=>
         {
            console.log(error);
            this.snack.open("something went wrong with Backend Otp verification for signup ", 'X');
         }
      });
      return;
   }

//This is for Forget-Password attempt================================================
    if(this.forgetPassword == 'true')
    {
      //sending OTP to backend for verification----------------------------------------------------------------
      this.login.OtpVerifyForForgetPass(this.otp).subscribe
      ({
         next: (data:any)=>
         {
           console.log(data);
           this.user = data;
           this.router.navigate(['/login'],{queryParams:{userId:this.user.id}});
          
         },
         error: (error)=>
         {
            console.log(error);
            this.snack.open("something went wrong with Backend Otp verification for forger pass ", 'X');
         }
      });
      return;
    }
      //Backend Otp finished--------------------------------
      

    //this.router.navigate(['user-dash/category/0']);

    
   // }
    /*else
    {
      this.snack.open('OTP is incorrect !!, Re-Enter the accurate OTP  ', 'X');
      return;
    }*/
    
    
  }


//Login function so if OTP is verified we can navigate user to home page
/*
landingPage()
{
  this.loginDatas.email = this.user.email;
  this.loginDatas.pass = this.user.pass;

 this.decryptPass = this.enDecrSer.get('password',this.loginDatas.pass);
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
      console.log(dataForLog.token);
      


     if(this.login.getUserRole() == 'NORMAL')
     {
        console.log('navigating user......');
        this.router.navigate(['user-dash/category/0']);
     } 
         
      
    },

    error: (error)=>
    {
      console.log(error);              
      this.snack.open('Some issues with generating token !!  ', 'X');

    }
  }); */

      
/*//Getting current user data from DB=========================================================
       this.login.currentUser().subscribe
       ({
        next: (userData:any)=>
        {
         

//saving user data into the localstorage-----------------------------==========================
          this.login.setUser(userData);
//Redirecting to the Admin-dash--------------------------------------------------------------------
          /*if(this.login.getUserRole() == 'ADMIN')
          {
            this.router.navigate(['admin-dash']);
          }

//Redirecting to the OTP-verification page.-------------------------------------------------------------------
           if(this.login.getUserRole()== 'NORMAL')
           {
            this.router.navigate(['user-dash/category/0']);
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
        this.snack.open('Some issues with generating token !!  ', 'X');

      }
    });   

  }*/
}


 


