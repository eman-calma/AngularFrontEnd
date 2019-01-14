import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLayoutComponent } from './components/app-layout/app-layout.component';
import { ProjectComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contacts/contacts.component';
import { ProjectContactComponent } from './components/project-contacts/project-contacts.component';

// import { ProjectService } from './services/project.service';

@NgModule({
  declarations: [
    AppComponent,
    AppLayoutComponent,
    ProjectComponent,
    ContactComponent,
    ProjectContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  // ProjectService
})
export class AppModule { }
