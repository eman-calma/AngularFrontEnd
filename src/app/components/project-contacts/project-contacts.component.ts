import { Component, OnInit } from '@angular/core';

import { ProjectContactService } from '../../services/project-contact.service';
import { ProjectService } from '../../services/project.service';
import { ContactService } from '../../services/contact.service';

import { Contact } from '../../models/contact';
import { Project } from '../../models/project';
import { ProjectContact } from '../../models/project-contacts';

@Component({
  selector: 'app-project-contacts',
  templateUrl: './project-contacts.component.html',
  styleUrls: ['./project-contacts.component.css']
})
export class ProjectContactComponent implements OnInit {

    contacts: Contact[];
    projects: Project[];
    selectedContacts: Contact[];
    projectContact: ProjectContact;
  /**
   *
   */
  constructor(private projectContactService: ProjectContactService, private projectService: ProjectService,
    private contactService: ContactService) {
        this.projectContact = new ProjectContact();
        this.projectContact.contactId = 0;
        this.projectContact.projectId = 0;
  }

  ngOnInit() {
    this.getContacts();
    this.getProjects();
  }

  getContacts() {
    this.contactService.getContacts().subscribe((result: any ) => { this.contacts = result; });
  }

  getProjects() {
    this.projectService.getProjects().subscribe((result: any ) => { this.projects = result; });
  }

  onProjectSelected(event) {
    this.projectContact.projectId = event;
    this.getContactsByProject();
  }

  onContactSelected(event) {
    this.projectContact.contactId = event;
  }

  addProjectContact() {
      if (this.projectContact.projectId === 0 || this.projectContact.contactId === 0) {
          return;
      }
      this.projectContactService.addProjectContact(this.projectContact).subscribe(result => { this.getContactsByProject(); });
  }

  getContactsByProject() {
    this.projectContactService.getProjectsContact(this.projectContact.projectId).
    subscribe((result: any) => {this.selectedContacts = result; });
  }

}
