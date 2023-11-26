import {Component} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {PageContainerComponent} from "@components/page-container";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    PageContainerComponent,
    RouterOutlet
  ]
})
export class AppComponent {
  title = 'angular-app';
}
