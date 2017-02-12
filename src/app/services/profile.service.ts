import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/catch';
import {Observable} from "rxjs";
import {UserProfile} from "../models/models";

@Injectable()
export class ProfileService {
  private _userProfile: UserProfile;

  constructor(private _http: Http) {
  }

  getProfile() {
    if (this._userProfile) {
      return Observable.create((observer) => {
        observer.next(this._userProfile);
      });
    }
    return this._http.get('/api/v1/profile')
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
      })
  }
}
