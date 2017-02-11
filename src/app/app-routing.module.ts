import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProjectsComponent} from "./components/projects/projects.component";

const routes: Routes = [
  {
    path: '',
    loadChildren: 'app/components/about/about.module#AboutModule'
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
