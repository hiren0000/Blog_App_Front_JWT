import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/service/login-service.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit 
{
  constructor(public loginService:LoginServiceService) {}

  ngOnInit(): void 
  {
    //here I can also take variable for user and the populate it values in html file.. but to save a time just doing this way
      
  }

}
