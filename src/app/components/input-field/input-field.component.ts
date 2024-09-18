import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {InputFieldModel} from "../../models/input-field.model";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-input-field',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.css'
})
export class InputFieldComponent implements OnInit{
  @Input() label : string = ''
  @Input() inputType !: any
  @Input() inputPlaceholder : string = ''
  @Input() passwordVisible = false;
  @Input() input !: InputFieldModel
  @Output() valueChange = new EventEmitter<string>()


  ngOnInit() {

  }
}
