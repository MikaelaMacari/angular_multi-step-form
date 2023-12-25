import {createReducer} from "@ngrx/store";

export const initialState: { step: number, label: string }[] = [
  {
    step: 1,
    label: 'Your info'
  },
  {
    step: 2,
    label: 'Select plan'
  },
  {
    step: 3,
    label: 'Add-Ons'
  },
  {
    step: 4,
    label: 'Summary'
  }
]

export const sidebarReducer = createReducer(
  initialState
);
