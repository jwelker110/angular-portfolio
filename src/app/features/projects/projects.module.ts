import {NgModule} from "@angular/core";
import {ProjectsComponent} from "./projects.component";
import {SharedModule} from "../../modules/shared.module";
import {ProjectsRoutingModule} from "./projects-routing.module";
import {ProjectComponent} from "../../components/project/project.component";

// import {ProjectFlatComponent} from "../../components/project-flat/project-flat.component";

@NgModule({
    imports: [
        SharedModule,
        ProjectsRoutingModule
    ],
    declarations: [ProjectsComponent, ProjectComponent]
})
export class ProjectsModule {
}
