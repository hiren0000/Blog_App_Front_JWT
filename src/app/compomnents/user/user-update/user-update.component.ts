import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginServiceService } from 'src/app/service/login-service.service';
import { SingupService } from 'src/app/service/singup.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent {

  currentpass = '';

  newPass = '';
  newPassCon = '';

  userData :any=
  {
    id: '',
    name: "",
    email:"",
    pass:"",
    about: "",
  }
   
  //Decoding password
   currentEncode:any = atob(this.userData.pass);
   

  constructor(private signup:SingupService, private snak:MatSnackBar,
              private loginUser:LoginServiceService, 
               ) { }

  ngOnInit(): void 
  { 
    //fetching logged in user------------------------------------------------------------------------------------
    if(this.loginUser.isLoggedIn()==true)
    {
      this.userData = this.loginUser.getUser();
    }
    else
    {
      return;
    }
  }

  doUpdateSubmit()
  {
    console.log(this.currentEncode);
    

    console.log("submitting update form"); 
    //console.log("Data", this.data);

  //  if(this.currentpass == this.currentEncode)
  //  {
  //   console.log('inside the first wall');
    
      if(this.newPass == this.newPassCon)
      {
        this.userData.pass = this.newPass;
        console.log(this.userData.pass);
        
        //Updating user now---------------------------------------------------------------------------
        this.signup.updateUser(this.userData, this.userData.id).subscribe
        ({
          next: (data:any)=>
          {
            Swal.fire('Successful', 'Data has been successfully updated', 'success');
          },
          error: (error)=>
          {
            Swal.fire('Error', 'Something went wrong !!', 'error');
          }
        });

      }
      else
      {
        this.snak.open("New Password does not match !!");
      }
    // }
    // else
    // {
    //  console.log(this.userData.pass);
      
    //    console.log(this.currentpass);
      
    //    this.snak.open("Current-Password is incorrect !!", 'X');
    //    return;
    // }
    
  }

}
