import {Http, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/catch';
import {Observable} from "rxjs";

@Injectable()
export class ProjectService {

  constructor(private _http: Http) {}

  getProjects() {
    return this._http.get('/api/v1/projects')
      .catch((error: Response | any) => {
        let errMsg: string;

        if(error instanceof Response) {
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
