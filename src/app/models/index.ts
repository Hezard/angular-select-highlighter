export interface State {
  highlightColor: string;
  filterColors: string[];
  text: string;
  selections: SelectionItem[];
}

export interface Color {
  id: number;
  value: 'red' | 'green' | 'yellow';
}

export interface AppState {
  root: State;
}

export interface SelectionItem {
  id: string | number;
  start: number;
  end: number;
  value: string;
  variant: string;
}
