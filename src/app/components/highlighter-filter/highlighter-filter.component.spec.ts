import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlighterFilterComponent } from './highlighter-filter.component';

describe('HighlighterFilterComponent', () => {
  let component: HighlighterFilterComponent;
  let fixture: ComponentFixture<HighlighterFilterComponent>;
  const mockData = [
    {
      id: '0',
      value: 'dummy text',
      variant: 'green',
      start: 22,
      end: 32
    },
    {
      id: '1',
      value: 'type and scrambled',
      variant: 'red',
      start: 194,
      end: 212
    },
    {
      id: '2',
      value: 'unchanged.',
      variant: 'green',
      start: 356,
      end: 366
    }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HighlighterFilterComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighlighterFilterComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not redner content if data empty', () => {
    component.data = null;

    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('.highlighter__selection').length).toBe(0);
  });

  it('should redner content if data exist', () => {
    component.data = mockData;

    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('.highlighter__selection').length).toBe(3);
  });
});
