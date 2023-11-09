import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() public label: string = '';
  @Input() public btnClassName: string = '';
  @Input() public isActive: boolean = true;
  @Output() public handleClick: EventEmitter<void> = new EventEmitter<void>();
  @Input() public card: any;

  public emitClickEvent(): void {
    this.handleClick.emit()
  }
}
