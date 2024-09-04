import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-input-field',
  standalone: true,
  imports: [],
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.css'
})
export class InputFieldComponent {
  @Input() label : string = ''
  @Input() inputType : string = ''
  @Input() inputPlaceholder : string = ''

}
