import {Component, OnInit} from '@angular/core';
import {LogoComponent} from "../../components/logo/logo.component";
import {LucideAngularModule} from "lucide-angular";
import {InputFieldComponent} from "../../components/input-field/input-field.component";
import {ButtonComponent} from "../../components/button/button.component";
import {RouterLink, RouterOutlet} from "@angular/router";
import {InputFieldModel} from "../../models/input-field.model";
import {UsersService} from "../../services/users.service";
import {FormsModule} from "@angular/forms";

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
    FormsModule,
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent implements OnInit{

  passwordVisible !: boolean;
  inputFieldsProperties !: InputFieldModel[];


  buttonProperties = {
    name : "Sign Up",
    backgroundColor : "#2970FF"
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }


  constructor(
    private inputFieldsPropService : UsersService
  ) {

  }

  onChildValueChange(newValue: string) {
    console.log('Nouvelle valeur de l\'enfant :', newValue);
  }

  ngOnInit(): void {
    this.inputFieldsProperties = this.inputFieldsPropService.signUpFields
  }

  OnSubmit(){
    console.log("Formulaire soumit");
    console.log(this.inputFieldsProperties)
    const userData = {
      name: this.inputFieldsProperties[0].value,
      email: this.inputFieldsProperties[1].value,
      password: this.inputFieldsProperties[2].value
    };

    this.inputFieldsPropService.signUp(userData).subscribe()
  }

}


