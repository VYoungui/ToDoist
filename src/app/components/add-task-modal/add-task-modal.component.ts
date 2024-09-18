import {Component, OnInit} from '@angular/core';
import {InputFieldComponent} from "../input-field/input-field.component";
import {DatePickerComponent} from "../date-picker/date-picker.component";
import {ButtonComponent} from "../button/button.component";
import {LucideAngularModule} from "lucide-angular";
import {Router} from "@angular/router";
import {InputFieldModel} from "../../models/input-field.model";
import {TasksService} from "../../services/tasks.service";
import {FormsModule} from "@angular/forms";
import {TasksModel} from "../../models/tasks.model";

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

  inputFieldsProperties !: InputFieldModel

  closeModal() {
    this.router.navigate(['/home']);
  }

  constructor(
    private router: Router,
    private inputFieldsPropService : TasksService
  ) {}

  OnSubmit(){
    console.log("Formulaire soumit");
    console.log(this.inputFieldsProperties, this.textareaValue)


    const taskData : TasksModel = {
      name: this.inputFieldsProperties.value,
      description: this.textareaValue,
      state : true,
      user_id: 1,
      date  : "2022-11-23"

    };

    this.inputFieldsPropService.createTask(taskData).subscribe({
      next: (data) => {
        console.log(data)
        this.router.navigateByUrl('/home').then(r => console.log("don't know!", r))
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  ngOnInit(): void {
    this.inputFieldsProperties = this.inputFieldsPropService.taskProperties

  }


}
