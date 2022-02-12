import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }



  public loginVerify(user:User)
  {
    //calling webservice 
    console.log(user);
    return this.httpClient.post("https://localhost:44352/api/login/token",user);
  }
  public logOut(){
 
   
    localStorage.removeItem("UserName");
    localStorage.removeItem("AccessRole");
    sessionStorage.removeItem("UserName");
  }
}
