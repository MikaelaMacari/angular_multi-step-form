import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() public label: string = ''
  @Input() public btnClassName: string = ''
  @Output() public handleClick: EventEmitter<void> = new EventEmitter<void>();

  public emitClickEvent(): void  {
    this.handleClick.emit()
  }
}
