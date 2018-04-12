import {NgModule} from '@angular/core';
import {AboutRoutingModule} from './about-routing.module';
import {AboutComponent} from './about.component';
import {CommonSharedModule} from "../../modules/common-shared.module";

@NgModule({
    imports: [
        CommonSharedModule,
        AboutRoutingModule
    ],
    declarations: [AboutComponent]
})
export class AboutModule {
}
