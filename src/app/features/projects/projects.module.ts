import {NgModule} from "@angular/core";
import {ProjectsComponent} from "./projects.component";
import {SharedModule} from "../../modules/shared.module";
import {ProjectsRoutingModule} from "./projects-routing.module";
import {ProjectFlatComponent} from "../project-flat/project-flat.component";

@NgModule({
  imports: [
    SharedModule,
    ProjectsRoutingModule
  ],
  declarations: [ProjectsComponent, ProjectFlatComponent]
})
export class ProjectsModule {
}
