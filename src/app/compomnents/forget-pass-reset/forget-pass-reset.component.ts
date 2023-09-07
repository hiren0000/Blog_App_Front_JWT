import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forget-pass-reset',
  templateUrl: './forget-pass-reset.component.html',
  styleUrls: ['./forget-pass-reset.component.css']
})
export class ForgetPassResetComponent implements OnInit 
{

  retypepass= '';

  user = 
  {
    id: '',
    name: '',
    password: '',
  }  

  constructor() {}

  ngOnInit(): void 
  {
      
  }

  //changing the password---------------------
  ForgetPassResetForm()
  {
    
  }

}
