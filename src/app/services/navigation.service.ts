import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Navigation } from '../interfaces/navigation.interface';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private url = 'assets/data/navigation.json';

  constructor(private httpClient: HttpClient) {}

  getNavigation(): Observable<Navigation[]> {
    return this.httpClient.get<Navigation[]>(this.url);
  }
}
