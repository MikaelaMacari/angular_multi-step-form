import {bootstrapApplication} from "@angular/platform-browser";
import {provideRouter} from "@angular/router";

import {provideStore} from "@ngrx/store";

import {routes} from "./app/app-routes";
import {AppComponent} from "./app/app.component";
import {metaReducers, reducers} from "@store/reducers";

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideStore(reducers, {
      metaReducers
    })
  ]
});
