import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar-step-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar-step-item.component.html',
  styleUrls: ['./sidebar-step-item.component.scss']
})
export class SidebarStepItemComponent {
  @Input() public item: {step: number, label: string} | null = null

}
