import {Component, ElementRef, HostListener, Input} from '@angular/core';

@Component({
  selector: 'app-input-field',
  standalone: true,
  imports: [],
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.css'
})
export class InputFieldComponent {
  @Input() label : string = ''
  @Input() inputType !: any
  @Input() inputPlaceholder : string = ''
  @Input() passwordVisible = false;

  constructor(private el: ElementRef) {}

  @HostListener('click', ['$event']) onClick(event: Event) {
    event.stopPropagation(); // Prevent the click from propagating to the parent
    this.passwordVisible = !this.passwordVisible;
    const input = this.el.nativeElement as HTMLInputElement;
    input.type = this.passwordVisible ? 'text' : 'password';
  }

}
