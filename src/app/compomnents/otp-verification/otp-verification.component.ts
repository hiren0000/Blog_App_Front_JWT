import { Component, OnInit} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
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

  userId = '';

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
              private userService:LoginServiceService) {}

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

//=============================================
  public getUserforOtp()
  {
    //getting user-----------------------------------------------------
    this.userService.getUserForOTP(this.userId).subscribe
    ({
      next: (userData:any)=>
      {
        this.user = userData;
        console.log(this.user.otp);
        
      },
      error: (error)=>
      {
        console.log(error);        
        Swal.fire('Error', 'Something wrong with OTP verification !! ', 'error');
      }

    });
  }

//OtpForm to verify email----------------------------------------------------------------------------------  
  otpForm()
  {

    this.getUserforOtp();

    if(this.user.otp == this.Otp)
    {
    console.log('OTP are equal');
    
    }
    else
    {
      this.snack.open('OTP not verified !! ', 'X');
      return;
    }
    
    
  }

}
