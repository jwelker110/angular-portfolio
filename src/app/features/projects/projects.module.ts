import {NgModule} from '@angular/core';
import {ProjectsComponent} from './projects.component';
import {CommonSharedModule} from '../../modules/common-shared.module';
import {ProjectsRoutingModule} from './projects-routing.module';
import {ProjectComponent} from '../../components/project/project.component';
import {SharedModule} from 'primeng/shared';
import {CardModule} from 'primeng/card';

@NgModule({
    imports: [
        CommonSharedModule,
        ProjectsRoutingModule,
        SharedModule,
        CardModule
    ],
    declarations: [
        ProjectsComponent,
        ProjectComponent
    ]
})
export class ProjectsModule {
}
