import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserService } from './services/user.service';

import { ContactmanagerAppComponent } from './contactmanager-app.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../shared/material.module';
import { FormsModule } from '@angular/forms';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { NotesComponent } from './components/notes/notes.component';
import { NewContactDialogComponent } from './components/new-contact-dialog/new-contact-dialog.component';

const routes: Routes = [
  {
    path: '',
    component: ContactmanagerAppComponent,
    children: [
      {
        path: ':id', component: MainContentComponent
      },
      {
        path: '', component: MainContentComponent
      }
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [ContactmanagerAppComponent, SideNavComponent, ToolbarComponent, MainContentComponent, NotesComponent, NewContactDialogComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  providers: [
    UserService
  ]
})
export class ContactmanagerModule { }
