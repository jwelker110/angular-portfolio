import {NgModule} from "@angular/core";
import {SkillComponent} from "../components/skill/skill.component";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [CommonModule],
  declarations: [SkillComponent],
  exports: [CommonModule, SkillComponent],
  providers: []
})
export class SharedModule {
}
