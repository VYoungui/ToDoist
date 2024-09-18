import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {InputFieldModel} from "../models/input-field.model";
import {SessionStorageService} from "./session-storage.service";
import {environment} from "../environment/environment";





@Injectable({
  providedIn: 'root'
})
export class UsersService {

  apiUrl = environment.apiUrl + `/user`
  userItem = new SessionStorageService()

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  logIn(data: any): Observable<any>{
    return new Observable((observer)=>{
      const url = `${this.apiUrl}/login`;
      this.http.post(url, data).subscribe((result: any)=>{
          this.userItem.setItem(result.data.id, result.data.name)
        this.router.navigateByUrl('/home').then(r => console.log(r))
          observer.next(result)
          observer.complete()
        }, error =>{
          observer.error(error)
        alert("Mot de pas ou email incorrect")
          observer.complete()
        }
      )
    })
  }

  signUp(data: any): Observable<any>{
    return new Observable((observer)=>{
      console.log("Sign up:",data)
      console.log(this.http.post(`${this.apiUrl}/user`, data))
      this.http.post(`${this.apiUrl}/user`, data).subscribe((result: any)=>{
          this.router.navigateByUrl('/home')
          observer.next(result)
          observer.complete()
        }, error =>{
          observer.error(error)
        alert("Vérifier votre connexion")
          observer.complete()
        }
      )
    })
  }

  LocalStorage(){

  }


  signUpFields : InputFieldModel[] =[
    {
      label: "Name",
      type: "text",
      placeholder: "Name",
      value: ''
    },
    {
      label: "Email",
      type: "email",
      placeholder: "Email",
      value: ''
    },
    {
      label: "Password",
      type: "password",
      placeholder: "Password",
      value: ''
    },
  ];

  logInFields : InputFieldModel[] = [
    {
      label: "Email",
      type: "email",
      placeholder: "Email",
      value: ''
    },
    {
      label: "Password",
      type: "password",
      placeholder: "Password",
      value: ''
    },
  ]
}
