import {Component, OnInit} from '@angular/core';
import {InputFieldComponent} from "../input-field/input-field.component";
import {DatePickerComponent} from "../date-picker/date-picker.component";
import {ButtonComponent} from "../button/button.component";
import {LucideAngularModule} from "lucide-angular";
import {Router} from "@angular/router";
import {UsersModel} from "../../models/users.model";
import {TasksService} from "../../services/tasks.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-add-task-modal',
  standalone: true,
  imports: [
    InputFieldComponent,
    DatePickerComponent,
    ButtonComponent,
    LucideAngularModule,
    FormsModule
  ],
  templateUrl: './add-task-modal.component.html',
  styleUrl: './add-task-modal.component.css'
})
export class AddTaskModalComponent implements OnInit{

  textareaValue !: string

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

  inputFieldsProperties !: UsersModel

  closeModal() {
    this.router.navigate(['/home']);
  }

  OnSubmit(){
    console.log("Formulaire soumit");
    console.log(this.inputFieldsProperties, this.textareaValue)


    const taskData = {
      title: this.inputFieldsProperties.value,
      description: this.textareaValue,
      state :``,
      user_id: 1,
      date  : new Date()

    };

    this.inputFieldsPropService.createTask(taskData).subscribe()
  }

  constructor(
    private router: Router,
    private inputFieldsPropService : TasksService
  ) {}

  ngOnInit(): void {
    this.inputFieldsProperties = this.inputFieldsPropService.taskProperties
  }


}
