import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Experience } from '../interfaces/experience.interface';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  private url = 'assets/data/experience.json';

  constructor(private httpClient: HttpClient) {}

  getExperience(): Observable<Experience[]> {
    return this.httpClient.get<Experience[]>(this.url);
  }
}
