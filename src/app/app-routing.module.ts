import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ArtistryComponent } from './artistry/artistry.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { HistoryComponent } from './history/history.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  { path: '', redirectTo: '/about_me', pathMatch: 'full' },
  { path: 'about_me', component: AboutComponent },
  { path: 'projects_training', component: ProjectsComponent},
  { path: 'artistry', component: ArtistryComponent },
  { path: 'certificates', component: CertificatesComponent },
  { path: 'work_history', component: HistoryComponent },
  { path: 'contact', component: ContactComponent },
  // Add more routes for other pages if needed
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })], // Enable hash-based routing here
  exports: [RouterModule]
})

export class AppRoutingModule { }
