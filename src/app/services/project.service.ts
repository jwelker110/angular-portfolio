import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mergeMap';
import {Observable} from 'rxjs/Observable';
import {Project} from '../models/models';

@Injectable()
export class ProjectService {

    private _projects: Project[];

    constructor(private _http: Http) {
    }

    getProjects() {
        if (this._projects) {
            let i = 0;
            // TODO: this is uglyyyyyyy
            return Observable.of(Observable.from(this._projects).map((project) => {
                i++;
                return Observable.of(project).delay(i * 250);
            }))
                .catch((error: any) => {
                    return Observable.throw(error);
                });
        }
        // // hasn't been retrieved yet
        this._projects = [];

        return this._http.get('/api/v1/project.json')
            .map((resp: Response) => {
                console.log(resp);
                return resp.json();
            })
            .mergeMap((resp: Project[]) => {
                return Observable.from(resp).map((project) => {
                    this._projects.push(<Project>project);
                    return Observable.of(project).delay(this._projects.length * 250);
                });
            })
            .catch((error: Response | any) => {
                console.log(error);
                return Observable.throw(error);
            });
    }

}
