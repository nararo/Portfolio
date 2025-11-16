import { Injectable } from '@angular/core';
import { Contact } from '../interfaces/contact.interface';
import { Observable, of } from 'rxjs';
import { setThrowInvalidWriteToSignalError } from '@angular/core/primitives/signals';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private url = 'assets/data/contact.json';

  constructor(private httpClient: HttpClient) {}

  getContact(): Observable<Contact[]> {
    return this.httpClient.get<Contact[]>(this.url);
  }
}
