import { Component } from '@angular/core';
import { LoginServiceService } from 'src/app/service/login-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  constructor(public loginService:LoginServiceService) {}

}
