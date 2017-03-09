import {Http, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/catch';
import {Observable} from "rxjs";
import {Project} from "../models/models";

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

        return this._http.get('/api/v1/projects')
            .map((resp) => {
                return Observable.from(resp.json()).map((project) => {
                    this._projects.push(<Project>project);
                    return Observable.of(project).delay(this._projects.length * 250);
                });
            })
            .catch((error: Response | any) => {
                let errMsg: string;

                if (error instanceof Response) {
                    const body = error.json() || '';
                    const err = body.error || JSON.stringify(body);
                    errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
                } else {
                    errMsg = error.message ? error.message : error.toString();
                }
                console.error(errMsg);
                return Observable.throw(errMsg);
            });
    }

}
