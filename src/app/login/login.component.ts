import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private router: Router,private dataService: DataService) { }
  ngOnInit(): void {

  }



  login(){
    console.log(this.loginForm.value);
  }
  gotoRegister(){
    this.goToPage('register');
  }
  resetPW(){
    this.goToPage('register');//moet nog die een maak
  }
  goToPage(pageName: string):void{
    this.router.navigate([`${pageName}`]);
  }
  loginForm = new FormGroup({
    email: new FormControl("",[Validators.required,
      Validators.email]),
    password: new FormControl("",[Validators.required,
      Validators.minLength(6)]),
  });


  get Email(): FormControl{
    return this.loginForm.get("email") as FormControl;
  }

  get PWD(): FormControl{
    return this.loginForm.get("password") as FormControl;
  }
}
