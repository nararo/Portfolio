import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Skill } from '../interfaces/skill.interface';

@Injectable({
  providedIn: 'root',
})
export class SkillService {
  private url = 'assets/data/skill.json';

  constructor(private httpClient: HttpClient) {}

  getSkills(): Observable<Skill[]> {
    return this.httpClient.get<Skill[]>(this.url);
  }
}
