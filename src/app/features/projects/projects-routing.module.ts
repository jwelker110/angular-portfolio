import {NgModule} from "@angular/core";
import {ProjectsComponent} from "./projects.component";
import {RouterModule, Routes} from "@angular/router";

const ROUTES: Routes = [
  {
    path: '',
    component: ProjectsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule {
}
