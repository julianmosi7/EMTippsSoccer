import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bs-button',
  templateUrl: './bs-button.component.html',
  styleUrls: ['./bs-button.component.scss']
})
export class BsButtonComponent {
  @Input() mode = 'primary';
  @Input() size = 'lg';
  @Input() value = '';
  @Output() clicked = new EventEmitter<string>();

  onClick(): void{
    console.log(`onClick ${this.mode}/${this.size}`);
    this.clicked.emit(this.value);
  }

}
