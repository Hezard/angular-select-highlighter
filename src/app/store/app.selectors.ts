import { createSelector } from '@ngrx/store';
import { AppState } from '../models';

export const getSelections = ({ root }: AppState) => root.selections;
export const getColor = ({ root }: AppState) => root.highlightColor;
export const getText = ({ root }: AppState) => root.text;
export const getFilters = ({ root }: AppState) => root.filterColors;
export const getFilteredSelections = createSelector(getFilters, getSelections, (filters, selections) => {
  return selections.filter(item => {
    return filters.includes(item.variant);
  });
});
