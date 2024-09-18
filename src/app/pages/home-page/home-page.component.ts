import {Component, OnInit} from '@angular/core';
import {HeaderLayoutComponent} from "../../components/header-layout/header-layout.component";
import {ButtonComponent} from "../../components/button/button.component";
import {SectionHeadComponent} from "../../components/section-head/section-head.component";
import {TaskCardComponent} from "../../components/task-card/task-card.component";
import {DatePickerComponent} from "../../components/date-picker/date-picker.component";
import {AddTaskModalComponent} from "../../components/add-task-modal/add-task-modal.component";
import {Router} from "@angular/router";
import {UsersService} from "../../services/users.service";
import {TasksService} from "../../services/tasks.service";
import {TasksModel} from "../../models/tasks.model";

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
export class HomePageComponent implements OnInit{

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

  taskCardProperties : TasksModel[] = []

  openTaskModal() {
    this.router.navigate(['/createTask']);
  }

  constructor(
    private router: Router,
    private taskCardService : TasksService
  ) {}

  ngOnInit(): void {
   this.taskCardService.fetchTasks().subscribe(
     data => {
       console.log(data)
       this.taskCardProperties = data
     }
   )
  }
}
