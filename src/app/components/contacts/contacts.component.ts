import { Component, OnInit } from '@angular/core';

import { ContactService } from '../../services/contact.service';

import { Contact } from '../../models/contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactComponent implements OnInit {

  contacts: Contact[];
  contact: Contact;

  /**
   *
   */
  constructor(private contactService: ContactService) {
    this.contact = new Contact();
      this.contact.id = 0;
      this.contact.firstname = '';
      this.contact.lastname = '';
      this.contact.address = '';
      this.contact.phone = '';
  }

  ngOnInit() {
    this.getContacts();
  }

  addContact(): void {
    if (this.contact.firstname === '' || this.contact.lastname === '' || this.contact.address === '' || this.contact.phone === '') {
        return;
    }
    this.contactService.addContact(this.contact).subscribe(result => { this.getContacts(); });
  }

  getContacts() {
    this.contactService.getContacts().subscribe((result: any ) => { this.contacts = result; });
  }
}
