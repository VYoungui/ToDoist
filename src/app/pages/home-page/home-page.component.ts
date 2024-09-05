import { Component } from '@angular/core';
import {HeaderLayoutComponent} from "../../components/header-layout/header-layout.component";
import {ButtonComponent} from "../../components/button/button.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    HeaderLayoutComponent,
    ButtonComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  dateFilterOption = [
    "Today",
    "Yesterday",
    "Tomorrow",
  ]
}
