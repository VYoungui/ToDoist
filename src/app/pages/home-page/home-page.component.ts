import { Component } from '@angular/core';
import {HeaderLayoutComponent} from "../../components/header-layout/header-layout.component";
import {ButtonComponent} from "../../components/button/button.component";
import {SectionHeadComponent} from "../../components/section-head/section-head.component";
import {TaskCardComponent} from "../../components/task-card/task-card.component";
import {DatePickerComponent} from "../../components/date-picker/date-picker.component";
import {AddTaskModalComponent} from "../../components/add-task-modal/add-task-modal.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    HeaderLayoutComponent,
    ButtonComponent,
    SectionHeadComponent,
    TaskCardComponent,
    DatePickerComponent,
    AddTaskModalComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  taskCkecked !: boolean

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
  ];

  taskCardProperties = [
    {
      taskName : "Travaux Ménagés",
      taskDescription : "Laver les assiettes, essuyer le sol, ranger la maison...",
      taskDate : "Today, 08h:00-10h:00",
      checked : this.taskCkecked,
    }
  ];

  openTaskModal() {
    this.router.navigate(['/createTask']);
  }

  constructor(private router: Router) {}
}
