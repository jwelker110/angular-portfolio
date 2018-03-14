import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {routerTransition} from '../../animations/app-animations';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()],
    host: {'[@routerTransition]': ''}
})
export class DashboardComponent implements OnInit {

    form: FormGroup;

//     export interface UserProfile {
//     avatarUrl?: string;
//     name: string;
//     skills?: UserSkill[];
//     details?: Detail[];
//     bio: string;
//     resume?: string;
//     links?: Link[];
//     stackOverflow?: string;
//     personalSite?: string;
//     locationCity?: string;
//     locationRegion?: string;
// }

    constructor(private _fb: FormBuilder) {
    }

    ngOnInit() {
        this.form = this._fb.group({
            avatarUrl: [''],
            name: ['', Validators.required],
            skills: this._fb.array([]),
            details: this._fb.array([]),
            bio: [''],
            resume: [''],
            links: this._fb.array([]),
            stackOverflow: [''],
            personalSite: [''],
            locationCity: [''],
            locationRegion: ['']
        });
    }

    submitForm() {

    }

    skillFieldAdd() {
    }

    skillFieldRemove(index: number) {
    }

    detailFieldAdd() {
    }

    detailFieldRemove(index: number) {
    }

    linkFieldAdd() {
    }

    linkFieldRemove(index: number) {
    }

}
