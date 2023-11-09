import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SidebarStepItemComponent} from "./sidebar-step-item/sidebar-step-item.component";
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, SidebarStepItemComponent],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  public sidebarItems: {step: number, label: string}[] = [
    {
      step: 1,
      label: 'Your info'
    },
    {
      step: 2,
      label: 'Select plan'
    },
    {
      step: 3,
      label: 'Add-Ons'
    },
    {
      step: 4,
      label: 'Summary'
    }
  ]
}
