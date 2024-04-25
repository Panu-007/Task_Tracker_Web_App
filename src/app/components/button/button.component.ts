import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent{
   @Input() text: String = '';
   @Input() color: String = '';
   @Output() btnClick = new EventEmitter();

   onClick()
   {
      this.btnClick.emit();
    
   }
}
