import {Component, OnInit} from "@angular/core";
import {routerTransition} from "../../animations/app-animations";
import {ProfileService} from "../../services/profile.service";

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
    locationCity?: string;
    locationRegion?: string;
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

    constructor(private profileService: ProfileService) {
    }

    ngOnInit() {

        this.profileService.getProfile().subscribe((val) => {
            this.userProfile = val;
        }, (err) => {
            console.log(err);
        });
    }

}
