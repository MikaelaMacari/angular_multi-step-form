import {Component} from '@angular/core';
import {SidebarStepItemComponent} from "@components/sidebar/sidebar-step-item";
import {ThankYouComponent} from "@components/steps/thank-you";
import {SidebarComponent} from "@components/sidebar";

@Component({
  selector: 'app-page-container',
  templateUrl: './page-container.component.html',
  styleUrls: ['./page-container.component.scss'],
  standalone: true,
  imports: [
    SidebarStepItemComponent,
    ThankYouComponent,
    SidebarComponent
  ]
})
export class PageContainerComponent {

}
