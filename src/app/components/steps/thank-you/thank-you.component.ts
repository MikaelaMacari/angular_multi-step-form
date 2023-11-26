import {Component} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {ButtonComponent} from "../../common/button/button.component";
import {SectionHeaderComponent} from "../../common/section-header/section-header.component";

@Component({
  selector: 'app-thank-you',
  standalone: true,
  imports: [CommonModule, ButtonComponent, SectionHeaderComponent, NgOptimizedImage],
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss']
})
export class ThankYouComponent {

}
