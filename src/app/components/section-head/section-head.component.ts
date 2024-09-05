import {Component, Input} from '@angular/core';
import {LucideAngularModule} from "lucide-angular";

@Component({
  selector: 'app-section-head',
  standalone: true,
  imports: [
    LucideAngularModule
  ],
  templateUrl: './section-head.component.html',
  styleUrl: './section-head.component.css'
})
export class SectionHeadComponent {
  @Input() sectionName : string = '';
  @Input() unreadTaskNumber : number = 0;
  @Input() arrowDirection : string = '';
  @Input() borderColor : string = '';

}
