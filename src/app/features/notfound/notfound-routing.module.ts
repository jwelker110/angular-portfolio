import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {NotfoundComponent} from "./notfound.component";

const ROUTES: Routes = [
    {
        path: '',
        component: NotfoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})
export class NotFoundRoutingModule {
}
