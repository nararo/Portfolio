import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FooterService {
  private textFirstLine = 'Has llegado al final, Muchas gracias!';
  private textSecondtLine = 'Página realizada por Nararo dev';

  getData() {
    return of({
      firstLine: this.textFirstLine,
      secondLine: this.textSecondtLine,
    });
  }
}
