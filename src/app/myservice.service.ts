import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor() { }
  checkuser(email:string,pwd:string){
    if(email=="eve.holt@reqres.in" && pwd=="pistol"){
      localStorage.setItem('username',"admin");
      return true;
    }else{
      return false;
    }
  }
  
}
