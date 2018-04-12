import {Injectable} from '@angular/core';
import {of} from 'rxjs/observable/of';
import {_throw} from 'rxjs/observable/throw';
import {catchError} from 'rxjs/operators';
import {UserProfile} from '../models/models';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ProfileService {
    private _userProfile: UserProfile;

    constructor() {
    }

    getProfile(): Observable<UserProfile> {
        if (this._userProfile) {
            return of(this._userProfile);
        }
        return this._getUserProfile().pipe(
            catchError((error: any) => {
                console.error(error);
                return _throw(error);
            })
        );
    }

    private _getUserProfile(): Observable<UserProfile> {
        return of({
            avatarUrl: 'profile.jpg',
            name: 'Jonathan Welker',
            skills: [
                {
                    'name': 'JavaScript',
                    'level': 2
                },
                {
                    'name': 'Angular 2',
                    'level': 2
                },
                {
                    'name': 'HTML',
                    'level': 2
                },
                {
                    'name': 'CSS',
                    'level': 2
                },
                {
                    'name': 'Python',
                    'level': 2
                },
                {
                    'name': 'Bootstrap',
                    'level': 2
                },
                {
                    'name': 'SQL',
                    'level': 1
                }
            ],
            bio: 'I am a passionate and focused programmer seeking opportunities to help others using the skills I have learned, and continuously challenge myself to keep learning new and exciting technologies and methodologies.',
            details: [
                {
                    'title': 'What do you enjoy most about web development?',
                    'content': 'The best part about web development is the cycle of learning. Things are always changing and it\'s exciting to adapt to new technologies and implementations.'
                },
                {
                    'title': 'If you could master any one technology, language or framework this upcoming year, what would that be and why?',
                    'content': 'Angular 2 with TypeScript is a powerful framework. Angular 2 allows building fast, scalable applications that work across devices and in a mobile world like today that\'s crucial to ensure reaching the broadest audience. Coupled with TypeScript, you have a framework that encourages organization and consistency.'
                },
                {
                    'title': 'What are the qualities you most desire in a work environment and/or manager?',
                    'content': 'I want to be around people that are as passionate as I am about web development. Working with people that are as excited to learn as I am provides one of the best experiences and encourages personal and professional growth.'
                }
            ],
            resume: '',
            locationCity: 'St. Louis',
            locationRegion: 'MO',
            links: [
                {
                    'url': 'https://www.linkedin.com/in/jonathanzwelker/',
                    'text': 'LinkedIn',
                    'icon': 'linkedin'
                },
                {
                    'url': 'https://github.com/jwelker110',
                    'text': 'GitHub',
                    'icon': 'github'
                },
                {
                    'url': 'http://stackoverflow.com/users/5626385/jonathan-welker',
                    'text': 'Stack Overflow',
                    'icon': 'stack-overflow'
                },
                {
                    'url': 'http://scalablewebdesign.net',
                    'text': 'Personal Website',
                    'icon': 'user'
                }
            ]
        });
    }
}
