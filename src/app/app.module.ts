import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { ContactmanagerAppComponent } from './contactmanager/contactmanager-app.component';
import { ToolbarComponent } from './contactmanager/components/toolbar/toolbar.component';
import { MainContentComponent } from './contactmanager/components/main-content/main-content.component';
import { SideNavComponent } from './contactmanager/components/side-nav/side-nav.component';

const routes: Routes = [
  {
    path: 'demo',
    loadChildren: () => import('./demo/demo.module').then((m) => m.DemoModule),
  },
  { path: '**', redirectTo: 'demo' },
];

@NgModule({
  declarations: [AppComponent, ContactmanagerAppComponent, ToolbarComponent, MainContentComponent, SideNavComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
