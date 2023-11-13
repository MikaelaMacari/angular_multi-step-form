import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonComponent} from "../button/button.component";
import {SectionHeaderComponent} from "../section-header/section-header.component";

@Component({
  selector: 'app-add-ons-card',
  standalone: true,
  imports: [CommonModule, ButtonComponent, SectionHeaderComponent],
  templateUrl: './add-ons-card.component.html',
  styleUrls: ['./add-ons-card.component.scss']
})
export class AddOnsCardComponent {
  @Input() addOn!: { title: string, description: string, price: number, isActive: boolean };
}
