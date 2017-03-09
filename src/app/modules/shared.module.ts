import {NgModule, ModuleWithProviders} from "@angular/core";
import {SkillComponent} from "../components/skill/skill.component";
import {CommonModule} from "@angular/common";
import {ProfileService} from "../services/profile.service";
import {ProjectService} from "../services/project.service";

@NgModule({
  imports: [CommonModule],
  declarations: [SkillComponent],
  exports: [CommonModule, SkillComponent]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [ProfileService, ProjectService]
        };
    }
}
