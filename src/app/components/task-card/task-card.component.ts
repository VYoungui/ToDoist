import {Component, Input} from '@angular/core';
import {LucideAngularModule} from "lucide-angular";

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [
    LucideAngularModule
  ],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.css'
})
export class TaskCardComponent {
  @Input() taskName : string = '';
  @Input() taskDescription : string = '';
  @Input() taskDate : string = '';

  checked : boolean = false;

  isChecked(){
    this.checked = !this.checked
  }

}
