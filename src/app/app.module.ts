import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {SidebarComponent} from "./components/sidebar/sidebar.component";
import {PageContainerComponent} from './components/page-container/page-container.component';
import {PersonalInfoComponent} from './components/steps/personal-info';
import {SelectPlanComponent} from "./components/steps/select-plan";
import {AddOnsComponent} from "./components/steps/add-ons/add-ons.component";
import {SummaryComponent} from "./components/steps/summary/summary.component";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    StoreModule.forRoot({}, {}),
    PageContainerComponent,
    SidebarComponent,
    PersonalInfoComponent,
    SelectPlanComponent,
    AddOnsComponent,
    SummaryComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
