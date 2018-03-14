import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from './features/about/about.component';

const routes: Routes = [
    {
        path: '',
        component: AboutComponent
    },
    {
        path: 'projects',
        loadChildren: 'app/features/projects/projects.module#ProjectsModule'
    },
    {
        path: 'dashboard',
        loadChildren: 'app/features/dashboard/dashboard.module#DashboardModule'
    },
    {
        path: '404',
        loadChildren: 'app/features/notfound/notfound.module#NotFoundModule'
    },
    {
        path: '**',
        redirectTo: '404'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule {
}
