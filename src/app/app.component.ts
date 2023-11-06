import { Component } from '@angular/core';
import {withDebugTracing} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-app';
  protected readonly withDebugTracing = withDebugTracing;
}
