import appReducer, { initialState } from './app.reducer';
import { colorChange, textChange, selectionsChange, filtersChange, resetAll } from './app.actions';

describe('app reducer', () => {
  it('should update color', () => {
    const result = appReducer(initialState, colorChange({ highlightColor: 'red' }));
    expect(result).toEqual({
      ...initialState,
      highlightColor: 'red'
    });
  });

  it('should update text', () => {
    const result = appReducer(initialState, textChange({ text: 'Dummy Text' }));
    expect(result).toEqual({
      ...initialState,
      text: 'Dummy Text'
    });
  });

  it('should update selection', () => {
    const item = { id: '0', value: 'simply dummy', variant: 'yellow', start: 15, end: 27 };
    const result = appReducer(initialState, selectionsChange({ selections: [item] }));
    expect(result).toEqual({
      ...initialState,
      selections: [item]
    });
  });

  it('should update filter', () => {
    const data = ['red', 'yellow'];
    const result = appReducer(initialState, filtersChange({ filterColors: data }));
    expect(result).toEqual({
      ...initialState,
      filterColors: data
    });
  });

  it('should reset state', () => {
    const result = appReducer(
      {
        selections: [{ id: '0', start: 0, end: 6, value: 'Text', variant: 'red' }],
        text: 'Dummy Text',
        filterColors: ['red', 'green'],
        highlightColor: 'red'
      },
      resetAll()
    );
    expect(result).toEqual(initialState);
  });
});
