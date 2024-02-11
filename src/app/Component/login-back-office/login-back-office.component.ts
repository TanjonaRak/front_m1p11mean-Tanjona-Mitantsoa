import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-back-office',
  templateUrl: './login-back-office.component.html',
  styleUrls: ['./login-back-office.component.css']
})
export class LoginBackOfficeComponent {


  constructor(private router:Router){

  }

  Connect(form:NgForm){
      // this.router.navigate(["/home-manager"]);
      window.location.href = "/home-manager"
  }
}
