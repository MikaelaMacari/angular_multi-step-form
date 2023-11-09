import { Component } from '@angular/core';
import {SectionHeaderComponent} from "../common/section-header/section-header.component";
import {ButtonComponent} from "../common/button/button.component";

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss'],
  standalone: true,
  imports: [
    SectionHeaderComponent,
    ButtonComponent
  ]
})
export class PersonalInfoComponent {

}
