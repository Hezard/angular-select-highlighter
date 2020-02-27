import { createAction, props } from '@ngrx/store';
import { SelectionItem } from '../models';

const PREFIX = 'APPLICATION';

const TEXT_CHANGE = `${PREFIX}/TEXT_CHANGE`;
const SELECTIONS_CHANGE = `${PREFIX}//SELECTIONS_CHANGE`;
const FILTERS_CHANGE = `${PREFIX}//FILTERS_CHANGE`;
const COLOR_CHANGE = `${PREFIX}//COLOR_CHANGE`;
const RESET = `${PREFIX}//RESET`;

export const colorChange = createAction(COLOR_CHANGE, props<{ highlightColor: string }>());
export const textChange = createAction(TEXT_CHANGE, props<{ text: string }>());
export const filtersChange = createAction(FILTERS_CHANGE, props<{ filterColors: string[] }>());
export const selectionsChange = createAction(SELECTIONS_CHANGE, props<{ selections: SelectionItem[] }>());
export const resetAll = createAction(RESET);
