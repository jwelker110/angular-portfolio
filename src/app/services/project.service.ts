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
        // if (this._projects) {
        //     return Observable.from(this._projects).delay(1000);
        // }
        // console.log(this._projects);
        // // hasn't been retrieved yet
        let respItems = [];

        return this._http.get('/api/v1/projects')
            .map((resp) => {
                return Observable.from(resp.json()).map((project) => {
                    respItems.push(project);
                    return Observable.of(project).delay(respItems.length * 250);
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
