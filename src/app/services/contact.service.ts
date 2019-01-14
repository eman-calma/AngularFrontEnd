import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Contact } from '../models/contact';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable({
  providedIn: 'root',
})
export class ContactService {
    private projectApi = `${environment.serverUrl}`;
    constructor(private http: HttpClient) { }

    addContact(contact: Contact): Observable<Boolean> {
        return this.http.post(`${this.projectApi}/api/contact`, contact, httpOptions).pipe(map(data => <Boolean>data));
    }

    getContacts(): Observable<Contact[]> {
        return this.http.get(`${this.projectApi}/api/contacts`).pipe(map(data => <Contact[]>data));
    }

}
