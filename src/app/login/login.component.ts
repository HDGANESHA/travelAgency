import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthService} from '../shared/auth.service'
import { User } from '../shared/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isSubmitted = false;
  error = '';
  loginUser: any= new User();
  constructor(private formBuilder: FormBuilder, private router: Router,private authservice: AuthService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group(
      {
        //formcontrol name
        UserName: ['', [Validators.required]],
        Password: ['', [Validators.required]]
      }
    );
  }
  get formControls(){
    return this.loginForm.controls;
  }
  register(){
    this.router.navigateByUrl('/userdetaillist'); 
  }
  loginCredentials(){
    this.isSubmitted=true;
    alert("Submitted Login");
    if(this.loginForm.invalid){
      return;
    }


    console.log("submitted form");

    if(this.loginForm.valid){
     console.log("submitted with valid");
     this.error="";
     this.authservice.loginVerify(this.loginForm.value).subscribe(
       data=>{
         console.log(data);
         this.loginUser=data;
         sessionStorage.setItem('jwtToken',this.loginUser.Token);
         console.log(this.loginUser.RoleId)
         
         if(this.loginUser.RoleId===1)
         {
           console.log("Admin");
           localStorage.setItem("UserName",this.loginUser.UserName);
           localStorage.setItem("AccessRole",this.loginUser.RoleId.toString());
           sessionStorage.setItem("UserName",this.loginUser.UserName);
           this.router.navigateByUrl('/destinationlist');
         }
         else if(this.loginUser[0].RoleId===2){
           console.log("user");
           localStorage.setItem("UserName",this.loginUser.UserName);
           localStorage.setItem("AccessRole",this.loginUser.RoleId.toString());
           sessionStorage.setItem("UserName",this.loginUser.UserName);
           this.router.navigateByUrl('/destinationlist');
         } else if(this.loginUser.RoleId===3){
          console.log("coordinator");
          localStorage.setItem("UserName",this.loginUser.UserName);
          localStorage.setItem("AccessRole",this.loginUser.RoleId.toString());
          sessionStorage.setItem("UserName",this.loginUser.UserName);
          this.router.navigateByUrl('/destinationlist');
        }
         else{
           this.error="sorry! unable to authenticate"
         }
       },
       error=>{
         this.error="login invalid! try again";
       }
     )
    }
  }
}
