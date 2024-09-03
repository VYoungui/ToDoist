import { Component } from '@angular/core';
import {LogoComponent} from "../../components/logo/logo.component";
import {LucideAngularModule} from "lucide-angular";

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    LogoComponent,
    LucideAngularModule,
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {


}
