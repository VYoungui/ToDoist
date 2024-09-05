import {Component, OnInit} from '@angular/core';
import {LogoComponent} from "../../components/logo/logo.component";
import {LucideAngularModule} from "lucide-angular";
import {InputFieldComponent} from "../../components/input-field/input-field.component";
import {ButtonComponent} from "../../components/button/button.component";
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    LogoComponent,
    LucideAngularModule,
    InputFieldComponent,
    ButtonComponent,
    RouterOutlet,
    RouterLink,
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent implements OnInit{

  passwordVisible !: boolean

  inputFieldsProperties = [
    {
      label: "Name",
      type: "text",
      placeholder: "Name",
    },

    {
      label: "Email",
      type: "email",
      placeholder: "Email",
    },
    {
      label: "Password",
      type: this.passwordVisible ? "text" : "password",
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

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  ngOnInit(): void {
  }

}
