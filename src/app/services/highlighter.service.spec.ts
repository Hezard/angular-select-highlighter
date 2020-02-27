import { TestBed } from '@angular/core/testing';

import { HighlighterService } from './highlighter.service';

describe('HighlighterService', () => {
  let service: HighlighterService;

  const item = {
    id: '0',
    value: 'simply dummy',
    variant: 'yellow',
    start: 15,
    end: 27
  };

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HighlighterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('add one selection', () => {
    const result = service.updateSelections([], item);

    expect(result).toEqual([item]);
  });

  it('add selection inside another', () => {
    const result = service.updateSelections([item], {
      id: '0',
      value: 'ly du',
      variant: 'red',
      start: 19,
      end: 24
    });

    expect(result).toEqual([
      {
        id: jasmine.any(String),
        value: 'simp',
        variant: 'yellow',
        start: 15,
        end: 19
      },
      {
        id: jasmine.any(String),
        value: 'ly du',
        variant: 'red',
        start: 19,
        end: 24
      },
      {
        id: jasmine.any(String),
        value: 'mmy',
        variant: 'yellow',
        start: 24,
        end: 27
      }
    ]);
  });

  it('add selection overlaped at the beginig', () => {
    const result = service.updateSelections([item], {
      id: '0',
      value: 'is simply',
      variant: 'red',
      start: 12,
      end: 21
    });

    expect(result).toEqual([
      {
        id: jasmine.any(String),
        value: 'is simply',
        variant: 'red',
        start: 12,
        end: 21
      },
      {
        id: jasmine.any(String),
        value: ' dummy',
        variant: 'yellow',
        start: 21,
        end: 27
      }
    ]);
  });

  it('add selection overlaped at the end', () => {
    const result = service.updateSelections([item], {
      id: '0',
      value: 'dummy text',
      variant: 'red',
      start: 22,
      end: 32
    });

    expect(result).toEqual([
      {
        id: jasmine.any(String),
        value: 'simply ',
        variant: 'yellow',
        start: 15,
        end: 22
      },
      {
        id: jasmine.any(String),
        value: 'dummy text',
        variant: 'red',
        start: 22,
        end: 32
      }
    ]);
  });
});
