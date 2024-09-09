import {Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {UsersModel} from "../../models/users.model";
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
  @Input() input !: UsersModel
  @Output() valueChange = new EventEmitter<string>()

  constructor(private el: ElementRef) {}

/*  @HostListener('click', ['$event']) onClick(event: Event) {
    event.stopPropagation(); // Prevent the click from propagating to the parent
    this.passwordVisible = !this.passwordVisible;
    const input = this.el.nativeElement as HTMLInputElement;
    input.type = this.passwordVisible ? 'text' : 'password';
  }*/

  // onValueChange() {
  //   this.valueChange.emit(this.value)
  // }

  ngOnInit() {

  }
}
