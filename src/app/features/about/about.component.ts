import {Component, OnInit, animate, style, transition, state, trigger} from '@angular/core';
import {ProfileService} from "../../services/profile.service";
import {routerTransition} from "../../animations/app-animations";
import {ProjectService} from "../../services/project.service";

export interface UserSkill {
    name: string;
    level: number;
}

export interface UserDetail {
    title?: string;
    content: string;
}

interface UserProfile {
    avatarUrl?: string;
    name: string;
    skills?: UserSkill[];
    bio?: string;
    details?: UserDetail[];
    resume?: string;
    links?: Link[];
    stackOverflow?: string;
    personalSite?: string;
}

interface Link {
    url: string;
    text: string;
    icon?: string;
}

@Component({
    templateUrl: 'about.component.html',
    styleUrls: ['about.component.scss'],
    animations: [routerTransition()],
    host: {'[@routerTransition]': ''}
})
export class AboutComponent implements OnInit {
    userProfile: UserProfile = {
        name: '',
        bio: ''
    };

    constructor(private profileService: ProfileService, private projectService: ProjectService) {
    }

    ngOnInit() {

        this.profileService.getProfile().subscribe((val) => {
            this.userProfile = val.json();
        }, (err) => {
            console.log(err);
        });
    }

}
