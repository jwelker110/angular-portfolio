import {Component, OnInit} from '@angular/core';
import {Project} from '../../models/models';
import {ContentfulApiService} from '../../modules/contentful/contentful-api.service';
import {Entry, EntryCollection} from 'contentful';
import {map} from 'rxjs/operators';


@Component({
    selector: 'app-projects',
    templateUrl: 'projects.component.html',
    styleUrls: ['projects.component.scss']
})
export class ProjectsComponent implements OnInit {

    projects: Entry<Project>[] = [];

    constructor(private _contentful: ContentfulApiService) {
    }

    ngOnInit() {
        this._contentful.getEntriesForType('project').pipe(
            map((projects: EntryCollection<Project>) => {
                if (!projects.includes || !projects.includes.Asset) {
                    return projects;
                }
                for (const project of projects.items) {
                    for (const asset of projects.includes.Asset) {
                        if (project.fields.primaryImage && project.fields.primaryImage.sys.id === asset.sys.id) {
                            project.fields.primaryImage = asset;
                            break;
                        }
                    }
                }
                return projects;
            })
        ).subscribe((collection: EntryCollection<Project>) => {
            this.projects = collection.items;
        });
    }
}
