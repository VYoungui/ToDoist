import { Component } from '@angular/core';
import {InputFieldComponent} from "../../components/input-field/input-field.component";
import {ButtonComponent} from "../../components/button/button.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    InputFieldComponent,
    ButtonComponent,
    RouterLink
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {

  inputFieldsProperties = [
    {
      label: "Email",
      type: "email",
      placeholder: "Email",
    },
    {
      label: "Password",
      type: "password",
      placeholder: "Password",
    },
  ]

  buttonProperties = [
    {
      name : "Submit",
      backgroundColor : "#2970FF"
    },
    {
      name : "Cancel",
      backgroundColor : "#fff"
    },
  ]

}
