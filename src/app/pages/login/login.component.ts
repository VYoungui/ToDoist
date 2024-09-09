import {Component, OnInit} from '@angular/core';
import {InputFieldComponent} from "../../components/input-field/input-field.component";
import {ButtonComponent} from "../../components/button/button.component";
import {RouterLink} from "@angular/router";
import {UsersModel} from "../../models/users.model";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    InputFieldComponent,
    ButtonComponent,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  inputFieldsProperties !: UsersModel[]

  buttonProperties = {
    name : "Login",
    backgroundColor : "#2970FF"
  }

  constructor(
    private inputFieldsPropService : UsersService
  ) {}

  ngOnInit(): void {
    this.inputFieldsProperties = this.inputFieldsPropService.logInFields
  }

  OnSubmit(){
    console.log("Formulaire soumit");
    console.log(this.inputFieldsProperties)


    const userData = {
      email: this.inputFieldsProperties[0].value,
      password: this.inputFieldsProperties[1].value,
    };

    this.inputFieldsPropService.logIn(userData).subscribe()
  }

}
