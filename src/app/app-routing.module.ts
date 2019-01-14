import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppLayoutComponent } from './components/app-layout/app-layout.component';
import { ProjectComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contacts/contacts.component';
import { ProjectContactComponent } from './components/project-contacts/project-contacts.component';

const routes: Routes = [
  { path: '', component: ProjectComponent },
  { path: 'projects', component: ProjectComponent },
  { path: 'contacts', component: ContactComponent },
  { path: 'projectContacts', component: ProjectContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
