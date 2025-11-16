import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Education } from '../interfaces/education.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EducationService {
  private url = 'assets/data/education.json';

  constructor(private httpClient: HttpClient) {}

  getEducation(): Observable<Education[]> {
    return this.httpClient.get<Education[]>(this.url);
  }
}
