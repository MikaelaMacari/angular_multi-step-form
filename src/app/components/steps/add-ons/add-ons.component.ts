import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonComponent} from "../../common/button/button.component";
import {SectionHeaderComponent} from "../../common/section-header/section-header.component";
import {AddOnsCardComponent} from "../../common/add-ons-card/add-ons-card.component";

@Component({
  selector: 'app-add-ons',
  standalone: true,
  imports: [CommonModule, ButtonComponent, SectionHeaderComponent, AddOnsCardComponent],
  templateUrl: './add-ons.component.html',
  styleUrls: ['./add-ons.component.scss']
})
export class AddOnsComponent {
  public addOns: { title: string, description: string, price: number, isActive: boolean }[] = [
    {
      title: 'Online service',
      price: 1,
      description: 'Access to multiplayer games',
      isActive: true,
    },
    {
      title: 'Larger storage',
      price: 2,
      description: 'Extra 1TB of cloud save',
      isActive: true,
    },
    {
      title: 'Customizable profile',
      price: 2,
      description: 'Custom theme on your profile',
      isActive: false,
    },
  ]
}
