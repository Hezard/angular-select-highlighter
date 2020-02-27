import { Injectable, ErrorHandler, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService implements ErrorHandler {
  constructor(private snackBar: MatSnackBar, private zone: NgZone) {}

  public handleError(error: Error) {
    if (error instanceof Error) {
      this.showError('An Error occured. Try to reload page.');

      if (environment.production) {
        console.error(error);
      }
    }
  }

  public showError(message: string) {
    this.zone.run(() => {
      this.snackBar.open(message, null, {
        duration: 2000,
        verticalPosition: 'top',
        horizontalPosition: 'end'
      });
    });
  }
}
