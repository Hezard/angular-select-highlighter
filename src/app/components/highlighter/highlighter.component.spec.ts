import { SimpleChange } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlighterComponent } from './highlighter.component';
import { createSelection, findTextNode } from 'src/test/test.utils';

describe('HighlighterComponent', () => {
  let component: HighlighterComponent;
  let fixture: ComponentFixture<HighlighterComponent>;
  const mockText =
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.';
  const mockData = [
    {
      id: '0',
      value: 'is simply',
      variant: 'green',
      start: 12,
      end: 21
    },
    {
      id: '1',
      value: 'been',
      variant: 'red',
      start: 91,
      end: 95
    }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HighlighterComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighlighterComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show default text', () => {
    const defaultText = 'Default text';
    component.text = defaultText;
    component.data = [];

    component.ngOnChanges({
      text: new SimpleChange(null, component.text, false)
    });
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain(defaultText);
  });

  it('should not show component content without text', () => {
    component.text = '';
    component.data = null;

    component.ngOnChanges({
      text: new SimpleChange(null, component.text, false)
    });
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toBe('');
  });

  it('should render selections', () => {
    component.text = mockText;
    component.data = mockData;

    component.ngOnChanges({
      text: new SimpleChange(null, component.text, false),
      data: new SimpleChange(null, component.data, false)
    });

    fixture.detectChanges();

    const nodes = fixture.nativeElement.querySelectorAll('span');
    expect(nodes.length).toBe(2);
    expect(nodes[0].textContent).toBe(mockData[0].value);
    expect(nodes[1].textContent).toBe(mockData[1].value);
  });

  it('should not select anything', () => {
    const spyFn = spyOn(component.selectionText, 'emit');

    component.text = mockText;
    component.color = 'red';
    component.data = [];

    component.ngOnChanges({
      text: new SimpleChange(null, component.text, false)
    });
    fixture.detectChanges();

    const textNode = findTextNode(fixture.nativeElement, mockText);

    createSelection(textNode, 0, 0);

    fixture.nativeElement.dispatchEvent(new MouseEvent('mouseup'));

    expect(spyFn).not.toHaveBeenCalled();
  });

  it('should emit selection', () => {
    const spyFn = spyOn(component.selectionText, 'emit');
    const selection = { start: 0, end: 6, value: 'Lorem ', variant: 'red' };
    component.text = mockText;
    component.color = 'red';
    component.data = [];

    component.ngOnChanges({
      text: new SimpleChange(null, component.text, false)
    });

    fixture.detectChanges();

    const textNode = findTextNode(fixture.nativeElement, mockText);
    createSelection(textNode, 0, 6);

    fixture.nativeElement.dispatchEvent(new MouseEvent('mouseup'));

    expect(spyFn).toHaveBeenCalledWith(jasmine.arrayContaining([jasmine.objectContaining(selection)]));

    component.data = [{ id: '0', ...selection }];

    component.ngOnChanges({
      data: new SimpleChange(null, component.data, false)
    });
    fixture.detectChanges();

    const nodes = fixture.nativeElement.querySelectorAll('span');
    expect(nodes.length).toBe(1);
    expect(nodes[0].textContent).toBe(selection.value);
    expect(nodes[0].className).toBe('highlighter__selection--red');
  });
});
