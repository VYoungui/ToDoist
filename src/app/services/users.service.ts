import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {UsersModel} from "../models/users.model";



@Injectable({
  providedIn: 'root'
})
export class UsersService {

  apiUrl = 'http://localhost:3000'
  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  logIn(data: any): Observable<any>{
    return new Observable((observer)=>{
      this.http.post(`${this.apiUrl}/user`, data).subscribe((result: any)=>{
          console.log("Le résultat de la requête:", result, "et son status:", result.status);
          this.router.navigateByUrl('/home').then(r => console.log(r))
          observer.next(result)
          observer.complete()
        }, error =>{
          observer.error(error)
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
          console.log("Le résultat de la requête:", result, "et son status:", result.status);
          this.router.navigateByUrl('/home')
          observer.next(result)
          observer.complete()
        }, error =>{
          observer.error(error)
          observer.complete()
        }
      )
    })
  }

  logInFields : UsersModel[] =[
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

  signUpFields : UsersModel[] = [
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
