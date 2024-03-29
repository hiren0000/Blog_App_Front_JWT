import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/service/login-service.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  
  constructor(public  login:LoginServiceService, private router:Router) { }

  ngOnInit(): void 
  {
     
  }

  public logout()
  {
    this.login.logOut();
    this.router.navigate(['login']);

  }

}
