import {NgModule} from '@angular/core';
import {CommonSharedModule} from "../../modules/common-shared.module";
import {NotFoundRoutingModule} from "./notfound-routing.module";
import {NotfoundComponent} from "./notfound.component";

@NgModule({
    imports: [
        CommonSharedModule,
        NotFoundRoutingModule
    ],
    declarations: [NotfoundComponent]
})
export class NotFoundModule {
}
