import {NgModule} from "@angular/core";
import {ProjectsComponent} from "./projects.component";
import {SharedModule} from "../../modules/shared.module";
import {ProjectComponent} from "../project/project.component";
import {ProjectsRoutingModule} from "./projects-routing.module";

@NgModule({
  imports: [
    SharedModule,
    ProjectsRoutingModule
  ],
  declarations: [ProjectsComponent, ProjectComponent]
})
export class ProjectsModule {
}
