import { Component } from '@angular/core';
import {HeaderLayoutComponent} from "../../components/header-layout/header-layout.component";
import {ButtonComponent} from "../../components/button/button.component";
import {SectionHeadComponent} from "../../components/section-head/section-head.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    HeaderLayoutComponent,
    ButtonComponent,
    SectionHeadComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  dateFilterOption = [
    "Today",
    "Yesterday",
    "Tomorrow",
  ];

  sectionHeadProperties = [
    {
      sectionName: "To Do",
      unreadTaskNumber: 10,
      arrowDirection: "chevron-right",
      borderColor: "#F5234B"
    },

    {
      sectionName: "Done✅",
      unreadTaskNumber: 3,
      arrowDirection: "chevron-down",
      borderColor: "#34C759"
    },
  ]
}
