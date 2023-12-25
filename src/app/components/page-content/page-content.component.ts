import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PersonalInfoComponent} from "@components/steps/personal-info";
import {SelectPlanComponent} from "@components/steps/select-plan";
import {SummaryComponent} from "@components/steps/summary";
import {AddOnsComponent} from "@components/steps/add-ons";

@Component({
  selector: 'app-page-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-content.component.html',
  styleUrl: './page-content.component.scss'
})
export class PageContentComponent {
  steps: any = {
    step1: PersonalInfoComponent,
    step2: SelectPlanComponent,
    step3: AddOnsComponent,
    step4: SummaryComponent,
  };
}
