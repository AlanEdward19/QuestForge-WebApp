import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-coin-icon',
  templateUrl: './coin-icon.component.html',
  styleUrls: ['./coin-icon.component.css']
})
export class CoinIconComponent {
  @Input() title!: string;
  @Input() value!: number;
}
