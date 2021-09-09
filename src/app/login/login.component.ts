import { MyserviceService } from './../myservice.service';
import { Component, OnInit } from '@angular/core';
import {FormControl,FormBuilder,FormGroup,Validator, FormControlName, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logsign:boolean=true;
  loginform:FormGroup;
  signupform:FormGroup;
  visi:any="visibility_off";
  showr:boolean=true;
  msg:string="";
  constructor(private service:MyserviceService,private routes:Router) { 
    this.loginform=new FormGroup({
      email: new FormControl('',Validators.required ),
      pwd: new FormControl('', Validators.required),
     

    })
    this.signupform=new FormGroup({
      email: new FormControl('',Validators.required ),
      fullname: new FormControl('',Validators.required ),
      gender: new FormControl('',Validators.required ),
      contact:new FormControl('',[Validators.required,Validators.minLength(10)]),
      pwd: new FormControl('', [Validators.required,Validators.minLength(8)]),
      cnfmpwd: new FormControl('', [Validators.required,Validators.minLength(8)]),
    
    })

  }

  ngOnInit(): void {
  }
  
sub(){
  let email=this.loginform.value.email;
  let pwd=this.loginform.value.pwd;
  let output=this.service.checkuser(email,pwd);
  if(output==true){
    this.routes.navigate(['/home']);
  }else{
    this.msg="Wrong credentials";
    console.log("error while login");
  }

}
login_form(){
  if(this.logsign==false){
    this.logsign=true;
  }
}
signup_form(){
  if(this.logsign==true){
    this.logsign=false;
  }
}
suber(){
  console.log("success");
}


}