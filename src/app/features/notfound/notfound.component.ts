import {Component, OnInit} from '@angular/core';
import {routerTransition} from "../../animations/app-animations";

@Component({
    selector: 'app-notfound',
    templateUrl: './notfound.component.html',
    styleUrls: ['./notfound.component.scss'],
    animations: [routerTransition()],
    host: {'[@routerTransition]': ''}
})
export class NotfoundComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
        console.log('init');
    }

}
