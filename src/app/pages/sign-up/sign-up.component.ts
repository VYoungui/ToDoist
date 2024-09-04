import { Component } from '@angular/core';
import {LogoComponent} from "../../components/logo/logo.component";
import {LucideAngularModule} from "lucide-angular";
import {InputFieldComponent} from "../../components/input-field/input-field.component";
import {ButtonComponent} from "../../components/button/button.component";

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    LogoComponent,
    LucideAngularModule,
    InputFieldComponent,
    ButtonComponent,
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

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
  ]

  buttonProperties = [
    {
      name : "Submit",
      backgroundColor : "#000"
    },
    {
      name : "Cancel",
      backgroundColor : "#fff"
    },
  ]


}
