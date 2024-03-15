import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
loginForm:any;
registerForm:any
activeFrom: 'login'|'register'='login'

constructor(private fb:FormBuilder, private router:Router,private snackBar:MatSnackBar){}

ngOnInit(){

  this.loginForm=this.fb.group({
    email:["",[Validators.required,Validators.email]],
    password:["",Validators.required]
  });

  this.registerForm=this.fb.group({
    username:["",Validators.required],
    email:["",[Validators.required,Validators.email]],
    password:["",Validators.required]
  })
}

toggleForm(form:'login'|'register'){
  this.activeFrom=form;
}

login(){
  if(this.loginForm.valid){
    console.log("LOGIN INFO", this.loginForm.value);
    this.router.navigate(['dashboard']);
  }else{
    this.snackBar.open('Invalid email or passwword', 'Close',{duration:3000})
  }
}

}
