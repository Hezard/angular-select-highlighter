import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { By } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { appReducer } from './store';
import { AppMaterialModule } from './app-material.module';
import { HighlighterFilterComponent, HighlighterComponent } from './components';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { defaultText } from './constants';
import { findTextNode, createSelection } from 'src/test/test.utils';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, AppMaterialModule, StoreModule.forRoot({ root: appReducer })],
      declarations: [AppComponent, HighlighterComponent, HighlighterFilterComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should update color', () => {
    fixture.detectChanges();
    const spyFn = spyOn(component, 'onHighlightColorChange');
    const btnGroup = fixture.debugElement.query(By.css('[aria-label="Highlight Color"]'));
    const btn = btnGroup.query(By.css('button'));

    expect(btn.nativeElement.textContent).toBe('red');

    btn.nativeElement.dispatchEvent(new Event('click'));
    fixture.detectChanges();

    expect(spyFn).toHaveBeenCalledWith(
      jasmine.objectContaining({
        value: 'red'
      })
    );
  });

  it('should update text', () => {
    fixture.detectChanges();
    const spyFn = spyOn(component, 'onTextChange');
    const textarea = fixture.debugElement.query(By.css('textarea'));

    expect(textarea.nativeElement.value).toBe(defaultText);

    textarea.nativeElement.value = 'Dummy Text';
    textarea.nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(spyFn).toHaveBeenCalledWith(
      jasmine.objectContaining({
        target: jasmine.objectContaining({
          value: 'Dummy Text'
        })
      })
    );
  });

  it('should update filter', () => {
    fixture.detectChanges();
    const spyFn = spyOn(component, 'onFilterColorChange');
    const btnGroup = fixture.debugElement.query(By.css('[aria-label="Filter Color"]'));
    const btn = btnGroup.query(By.css('button'));

    expect(btn.nativeElement.textContent).toBe('red');

    btn.nativeElement.dispatchEvent(new Event('click'));
    fixture.detectChanges();

    expect(spyFn).toHaveBeenCalledWith(
      jasmine.objectContaining({
        value: ['red']
      })
    );
  });

  it('should make text selection', () => {
    fixture.detectChanges();
    const highlighter = fixture.debugElement.query(By.css('app-highlighter'));
    const btnGroup = fixture.debugElement.query(By.css('[aria-label="Highlight Color"]'));
    const btn = btnGroup.query(By.css('button'));

    btn.nativeElement.dispatchEvent(new Event('click'));
    fixture.detectChanges();

    const textNode = findTextNode(highlighter.nativeElement, defaultText);
    const result = createSelection(textNode, 12, 35);

    highlighter.nativeElement.dispatchEvent(new MouseEvent('mouseup'));

    fixture.detectChanges();

    expect(highlighter.query(By.css('span')).nativeElement.textContent).toBe(result);
  });
});
