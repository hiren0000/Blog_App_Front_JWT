import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  data= {
    name: "",
    email:"",
    pass:"",
    about: "",
  }

  constructor() { }

  ngOnInit(): void {
  }

  doSubmit()
  {
    console.log("try to submit signup form"); 
    console.log("Data", this.data);
    
  }

}
