import { TestBed } from '@angular/core/testing';

import { ErrorHandlerService } from './error-handler.service';
import { MatSnackBar } from '@angular/material/snack-bar';

class MockMatSnackBar {
  open() {}
}

describe('ErrorHandlerService', () => {
  let service: ErrorHandlerService;
  let spyFn;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: MatSnackBar, useClass: MockMatSnackBar }]
    });
    service = TestBed.inject(ErrorHandlerService);
    spyFn = spyOn(service, 'showError');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should show error', () => {
    service.handleError(new Error('test error'));

    expect(spyFn).toHaveBeenCalled();
  });

  it('should not show error', () => {
    service.handleError(null);
    expect(spyFn).not.toHaveBeenCalled();
  });
});
