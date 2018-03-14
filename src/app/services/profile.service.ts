import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/catch';
import {UserProfile} from '../models/models';

@Injectable()
export class ProfileService {
    private _userProfile: UserProfile = {
        "avatarUrl": "profile.jpg",
        "name": "Jonathan Welker",
        "skills": [
            {
                "name": "JavaScript",
                "level": 2
            },
            {
                "name": "Angular 2",
                "level": 2
            },
            {
                "name": "HTML",
                "level": 2
            },
            {
                "name": "CSS",
                "level": 2
            },
            {
                "name": "Python",
                "level": 2
            },
            {
                "name": "Bootstrap",
                "level": 2
            },
            {
                "name": "SQL",
                "level": 1
            }
        ],
        "bio": "I am a passionate and focused programmer seeking opportunities to help others using the skills I have learned, and continuously challenge myself to keep learning new and exciting technologies and methodologies.",
        "details": [
            {
                "title": "What do you enjoy most about web development?",
                "content": "The best part about web development is the cycle of learning. Things are always changing and it's exciting to adapt to new technologies and implementations."
            },
            {
                "title": "If you could master any one technology, language or framework this upcoming year, what would that be and why?",
                "content": "Angular 2 with TypeScript is a powerful framework. Angular 2 allows building fast, scalable applications that work across devices and in a mobile world like today that's crucial to ensure reaching the broadest audience. Coupled with TypeScript, you have a framework that encourages organization and consistency."
            },
            {
                "title": "What are the qualities you most desire in a work environment and/or manager?",
                "content": "I want to be around people that are as passionate as I am about web development. Working with people that are as excited to learn as I am provides one of the best experiences and encourages personal and professional growth."
            }
        ],
        "resume": "",
        "locationCity": "Baton Rouge",
        "locationRegion": "LA",
        "links": [
            {
                "url": "https://www.linkedin.com/in/jonathanzwelker/",
                "text": "LinkedIn",
                "icon": "linkedin"
            },
            {
                "url": "https://github.com/jwelker110",
                "text": "GitHub",
                "icon": "github"
            },
            {
                "url": "http://stackoverflow.com/users/5626385/jonathan-welker",
                "text": "Stack Overflow",
                "icon": "stack-overflow"
            },
            {
                "url": "http://scalablewebdesign.net",
                "text": "Personal Website",
                "icon": "user"
            }
        ]
    };


    constructor(private _http: Http) {
    }

    getProfile() {
        // if (this._userProfile) {
        //     return Observable.of(this._userProfile);
        // }
        return this._http.get('/api/v1/profile.json')
            .map((resp: Response) => {
                this._userProfile = resp.json();
                return this._userProfile;
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
            })
    }
}
