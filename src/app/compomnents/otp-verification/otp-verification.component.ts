import { Component, OnInit} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginServiceService } from 'src/app/service/login-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.component.html',
  styleUrls: ['./otp-verification.component.css']
})
export class OtpVerificationComponent implements OnInit
{
  Otp = '';

  userId:any = '';

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

  currentUser = 
  {  
   
      id: '',
      name: "",
      email:"",
      pass:"",
      about: "",
      otp: '',
    
  }



  loginDatas = 
  {
    email: '',
    pass: '',
  }

  constructor(private snack:MatSnackBar,
              private route:ActivatedRoute,
              private login:LoginServiceService,
              private router:Router) {}

  ngOnInit(): void 
  {
    this.snack.open('Please check your email For the OTP', 'X');

    //this.userId = this.route.snapshot.params['id'];
    this.route.queryParams.subscribe
    ({
      next : (data:any)=>
      {
        this.userId = data.order;
        console.log(this.userId);
        
      }

    })  
    
    
      
  }

  //getting current user details---------------------------------------------------------------------
  getUserDetails() 
  {
    console.log('Inside user details method --');

    if(this.login.getUser() == '')
    {
      this.snack.open('User does not exist', "X");
      return;
    }
    else
    {
      this.user = this.login.getUser();
      return this.user;
    }
    

  }

//OtpForm to verify email----------------------------------------------------------------------------------  
  otpForm()
  {

    this.getUserDetails() 

    //this.getUserforOtp();

    if(this.user.otp == this.Otp)
    {
    //naviagting user to home page....Think we need do something because Auth guard protection is stopping.
    //check the login service and normal Authguard as well..
    console.log('OTP are equal');
    
      this.localToken = this.login.getToken();
      console.log(this.localToken);
      console.log(this.user);
      this.landingPage();
      
      

    //this.router.navigate(['user-dash/category/0']);

    
    }
    else
    {
      this.snack.open('OTP is incorrect !!, Re-Enter the accurate OTP  ', 'X');
      return;
    }
    
    
  }


//Login function so if OTP is verified we can navigate user to home page
landingPage()
{
  this.loginDatas.email = this.user.email;
  this.loginDatas.pass = this.user.pass;

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
  });  

      
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


}  


