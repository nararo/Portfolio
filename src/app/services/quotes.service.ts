import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Quote } from '../interfaces/quote.interface';

@Injectable({
  providedIn: 'root',
})
export class QuotesService {
  private url = 'assets/data/quote.json';

  constructor(private httpClient: HttpClient) {}

  getQuote(): Observable<Quote[]> {
    return this.httpClient.get<Quote[]>(this.url);
  }
}
