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
    this.snackBar.open('Login Success','Close',{duration:3000})
    console.log("LOGIN INFO", this.loginForm.value);
    this.router.navigate(['dashboard']);
  }else{
    this.snackBar.open('Invalid email or passwword', 'Close',{duration:3000})
  }
}

register(){
  if(this.registerForm.valid){
    console.log("REGISTER INFO", this.registerForm.value);
    this.snackBar.open('Registeration Success','Close',{duration:3000})
    setTimeout(() => {
      window.location.reload();
    }, 2000);
    this.router.navigate(["login"])
  }else{
    this.snackBar.open('Please fill in all filds correctly', 'Close',{duration:3000})
  }
 

}

}
