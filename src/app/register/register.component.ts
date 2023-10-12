import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  implements OnInit {
  repeatPass: string = 'none';
  userExists: string = 'none';
  errorOccured: string = 'none';

  ngOnInit(): void {}

  registerForm = new FormGroup({
    firstname: new FormControl("",[Validators.required,
      Validators.minLength(2),
      Validators.pattern("[a-zA-Z].*[a-z]")]),
    lastname: new FormControl("",[Validators.required,
      Validators.minLength(2),
      Validators.pattern("[a-zA-Z].*[a-z]")]),
    email: new FormControl("",[Validators.required,
      Validators.email]),
    mobile: new FormControl("",[Validators.required,
      Validators.pattern("[0-9]*"),
      Validators.maxLength(10)]),    
    pwd: new FormControl("",[Validators.required,
      Validators.minLength(6)]),
    cpwd: new FormControl("")
  });

  get FirstName(): FormControl{
    return this.registerForm.get("firstname") as FormControl;
  }
  get LastName(): FormControl{
    return this.registerForm.get("lastname") as FormControl;
  }
  get Email(): FormControl{
    return this.registerForm.get("email") as FormControl;
  }
  get Mobile(): FormControl{
    return this.registerForm.get("mobile") as FormControl;
  }

  get PWD(): FormControl{
    return this.registerForm.get("pwd") as FormControl;
  }
  get CPWD(): FormControl{
    return this.registerForm.get("cpwd") as FormControl;
  }

  registerSubmitted(){
    if(this.PWD.value == this.CPWD.value){
      console.log(this.registerForm.value);
      this.repeatPass= 'none';
      this.userExists= 'none';
      this.errorOccured ='none';
     
    } else{ 
      this.repeatPass= 'inline';
    }
     

  }
}