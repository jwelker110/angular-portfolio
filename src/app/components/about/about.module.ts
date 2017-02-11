import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import {SharedModule} from "../../modules/shared.module";

@NgModule({
  imports: [
    SharedModule,
    AboutRoutingModule
  ],
  declarations: [AboutComponent]
})
export class AboutModule { }
