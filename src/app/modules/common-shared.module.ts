import {ModuleWithProviders, NgModule} from '@angular/core';
import {SkillComponent} from '../components/skill/skill.component';
import {CommonModule} from '@angular/common';
import {ProfileService} from '../services/profile.service';
import {ProjectService} from '../services/project.service';
import {ContentfulApiModule} from './contentful/contentful-api.module';
import {environment} from '../../environments/environment';

@NgModule({
    imports: [
        CommonModule,
        ContentfulApiModule.forChild({
            spaceId: environment.spaceId
        })
    ],
    declarations: [
        SkillComponent
    ],
    exports: [
        CommonModule,
        SkillComponent
    ]
})
export class CommonSharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CommonSharedModule,
            providers: [ProfileService, ProjectService]
        };
    }
}
