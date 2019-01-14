import { Component, OnInit } from '@angular/core';

import { ProjectService } from '../../services/project.service';

import { Project } from '../../models/project';

@Component({
  selector: 'app-project',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectComponent implements OnInit {
  projects: Project[];
  project: Project;

  /**
   *
   */
  constructor(private projectService: ProjectService) {
    this.project = new Project();
      this.project.id = 0;
      this.project.name = '';

  }

  ngOnInit() {
    this.getProjects();
  }

  addProject(): void {
    if (this.project.name === '') {
        return;
    }
    this.projectService.addProject(this.project).subscribe(result => { this.getProjects(); });
  }

  getProjects() {
    this.projectService.getProjects().subscribe((result: any ) => { this.projects = result; });
  }
}
