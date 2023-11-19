import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SectionHeaderComponent} from "../../common/section-header/section-header.component";
import {ButtonComponent} from "../../common/button/button.component";
import {CardComponent} from "../../common/card/card.component";
import {SubscriptionCardComponent} from "../../common/subscription-card/subscription-card.component";

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent, ButtonComponent, CardComponent, SubscriptionCardComponent],
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent {

}
