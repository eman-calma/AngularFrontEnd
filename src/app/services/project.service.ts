import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Project } from '../models/project';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
    private projectApi = `${environment.serverUrl}`;
    constructor(private http: HttpClient) { }

    addProject(project: Project): Observable<Boolean> {
        return this.http.post(`${this.projectApi}/api/project`, project, httpOptions).pipe(map(data => <Boolean>data));
    }

    getProjects(): Observable<Project[]> {
        return this.http.get(`${this.projectApi}/api/projects`).pipe(map(data => <Project[]>data));
    }

}
