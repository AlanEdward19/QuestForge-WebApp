import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-attribute-component',
  templateUrl: './attribute-component.component.html',
  styleUrls: ['./attribute-component.component.css']
})
export class AttributeComponentComponent {
  @Input() title!: string;
  @Input() bonus!: number;
  @Input() value!: number;
}
