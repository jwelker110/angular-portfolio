import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from "./components/about/about.component";

const routes: Routes = [
  {
    path: '',
    component: AboutComponent
  },
  {
    path: 'projects',
    loadChildren: 'app/components/projects/projects.module#ProjectsModule'
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
