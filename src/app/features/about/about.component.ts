import {Component, OnInit} from '@angular/core';
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/throttleTime';
import {routerTransition} from '../../animations/app-animations';
import {UserProfile} from '../../models/models';
import {ProfileService} from '../../services/profile.service';


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
