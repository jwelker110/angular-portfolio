import { Component, OnInit } from '@angular/core';
import {ProjectService} from "../../services/project.service";
import {Project} from "../project/project.component";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.getProjects().subscribe((val) => {
      this.projects = val.json();
    }, (err) => {
      console.error(err);
    });
  }

}
