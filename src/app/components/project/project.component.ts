import {Component, Input, OnInit} from '@angular/core';
import {Project} from '../../models/models';
import {Entry} from 'contentful';

@Component({
    selector: 'app-project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
    @Input() project: Entry<Project>;

    constructor() {
    }

    ngOnInit() {
    }

}
