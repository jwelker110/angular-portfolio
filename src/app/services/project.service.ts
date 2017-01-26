import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProjectService {

  constructor(private _http: Http) { }

  getProjects() {
    return this._http.get('/assets/projects.json')
  }  
}
