import {Component, OnInit} from '@angular/core';
import {projectTransition, routerTransition} from '../../animations/app-animations';
import {Project} from '../../models/models';
import {ProjectService} from '../../services/project.service';


@Component({
    selector: 'app-projects',
    templateUrl: 'projects.component.html',
    styleUrls: ['projects.component.scss'],
    animations: [routerTransition(), projectTransition()],
    host: {'[@routerTransition]': ''}
})
export class ProjectsComponent implements OnInit {

    projects: Project[] = [];

    constructor(private projectService: ProjectService) {
    }

    ngOnInit() {

        let delayedProjects = this.projectService.getProjects()
            .concatAll()
            .flatMap((obs) => {
                return obs;
            });

        delayedProjects.subscribe((proj) => {
            this.projects.push(<Project>proj);
        });

    }

    toggleSomething() {}
}
