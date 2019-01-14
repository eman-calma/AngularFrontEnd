import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { ProjectContact } from '../models/project-contacts';
import { Contact } from '../models/contact';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable({
  providedIn: 'root',
})
export class ProjectContactService {
    private projectApi = `${environment.serverUrl}`;
    constructor(private http: HttpClient) { }

    addProjectContact(projectContact: ProjectContact): Observable<Boolean> {
        return this.http.post(`${this.projectApi}/api/projectcontact`, projectContact, httpOptions).pipe(map(data => <Boolean>data));
    }

    getProjectsContact(id: number): Observable<Contact[]> {
        return this.http.get(`${this.projectApi}/api/projectcontacts/${id}`).pipe(map(data => <Contact[]>data));
    }

}
