import { Action, createReducer, on } from '@ngrx/store';
import * as AppActions from './app.actions';
import { State } from '../models';
import { defaultText } from '../constants';

export const initialState: State = {
  highlightColor: null,
  filterColors: [],
  text: defaultText,
  selections: []
};

const appReducer = createReducer(
  initialState,
  on(AppActions.colorChange, (state, { highlightColor }) => ({ ...state, highlightColor })),
  on(AppActions.textChange, (state, { text }) => ({ ...state, selections: [], text })),
  on(AppActions.selectionsChange, (state, { selections }) => ({ ...state, selections: [...selections] })),
  on(AppActions.filtersChange, (state, { filterColors }) => ({ ...state, filterColors: [...filterColors] })),
  on(AppActions.resetAll, () => ({ ...initialState }))
);

export default function reducer(state: State | undefined, action: Action) {
  return appReducer(state, action);
}
