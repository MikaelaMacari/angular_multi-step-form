import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonComponent} from "../../common/button/button.component";
import {SectionHeaderComponent} from "../../common/section-header/section-header.component";
import {CardComponent} from "../../common/card/card.component";

@Component({
  selector: 'app-select-plan',
  standalone: true,
  imports: [CommonModule, ButtonComponent, SectionHeaderComponent, CardComponent],
  templateUrl: './select-plan.component.html',
  styleUrls: ['./select-plan.component.scss']
})
export class SelectPlanComponent {
  public plans: { imageUrl: string, title: string, price: number, plan: number, isActive: boolean }[] = [
    {
      imageUrl: 'assets/images/icon-arcade.svg',
      title: 'Arcade',
      price: 90,
      plan: 2,
      isActive: true,
    },
    {
      imageUrl: 'assets/images/icon-advanced.svg',
      title: 'Advanced',
      price: 120,
      plan: 2,
      isActive: false,
    },
    {
      imageUrl: 'assets/images/icon-pro.svg',
      title: 'Pro',
      price: 150,
      plan: 2,
      isActive: false,
    },
  ]
}
