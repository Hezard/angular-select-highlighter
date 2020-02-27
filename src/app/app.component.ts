import { Component, OnInit } from '@angular/core';
import { colors } from './constants';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { selectionsChange, colorChange, filtersChange, resetAll, textChange } from './store/app.actions';
import { getColor, getText, getSelections, getFilters, getFilteredSelections } from './store/app.selectors';
import { SelectionItem, AppState, Color } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  colors: Color[] = colors;

  $color: Observable<string>;
  $text: Observable<string>;
  $selections: Observable<SelectionItem[]>;
  $filterColors: Observable<string[]>;
  $filteredItems: Observable<SelectionItem[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.$color = this.store.pipe(select(getColor));
    this.$text = this.store.pipe(select(getText));
    this.$selections = this.store.pipe(select(getSelections));
    this.$filterColors = this.store.pipe(select(getFilters));
    this.$filteredItems = this.store.pipe(select(getFilteredSelections));
  }

  onTextChange({ target: { value: text } }) {
    this.store.dispatch(textChange({ text }));
  }

  onTextSelection(selections) {
    this.store.dispatch(selectionsChange({ selections }));
  }

  onHighlightColorChange({ value: highlightColor }) {
    this.store.dispatch(colorChange({ highlightColor }));
  }

  onFilterColorChange({ value: filterColors }) {
    this.store.dispatch(filtersChange({ filterColors }));
  }

  onEraser() {
    this.store.dispatch(colorChange({ highlightColor: null }));
  }

  onReset() {
    this.store.dispatch(resetAll());
  }
}
