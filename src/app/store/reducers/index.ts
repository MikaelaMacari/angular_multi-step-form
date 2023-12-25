import {isDevMode} from '@angular/core';
import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {sidebarReducer} from "@store/reducers/sidebar.reducer";

export interface State {

}

export const reducers: ActionReducerMap<State> = {
  sidebarItem: sidebarReducer,
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
