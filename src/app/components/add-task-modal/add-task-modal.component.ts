import {Component, OnInit} from '@angular/core';
import {InputFieldComponent} from "../input-field/input-field.component";
import {DatePickerComponent} from "../date-picker/date-picker.component";
import {ButtonComponent} from "../button/button.component";
import {LucideAngularModule} from "lucide-angular";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-task-modal',
  standalone: true,
  imports: [
    InputFieldComponent,
    DatePickerComponent,
    ButtonComponent,
    LucideAngularModule
  ],
  templateUrl: './add-task-modal.component.html',
  styleUrl: './add-task-modal.component.css'
})
export class AddTaskModalComponent implements OnInit{

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

  closeModal() {
    this.router.navigate(['/home']);
  }
    constructor(private router: Router) {}

  ngOnInit(): void {

  }


}
