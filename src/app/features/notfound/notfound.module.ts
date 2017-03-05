import { NgModule } from '@angular/core';
import {SharedModule} from "../../modules/shared.module";
import {NotFoundRoutingModule} from "./notfound-routing.module";
import {NotfoundComponent} from "./notfound.component";

@NgModule({
  imports: [
    SharedModule,
    NotFoundRoutingModule
  ],
  declarations: [NotfoundComponent]
})
export class NotFoundModule { }
