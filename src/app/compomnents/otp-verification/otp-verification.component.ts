import { Component, OnInit} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.component.html',
  styleUrls: ['./otp-verification.component.css']
})
export class OtpVerificationComponent implements OnInit
{
  Otp = '';

  constructor(private snack:MatSnackBar) {}

  ngOnInit(): void 
  {
    this.snack.open('Please check your email For the OTP', 'X');
      
  }

//OtpForm to verify email----------------------------------------------------------------------------------  
  otpForm()
  {
    console.log('working on OTP verification soon will get implemented !!');
    console.log(this.Otp);
    
    
  }

}
