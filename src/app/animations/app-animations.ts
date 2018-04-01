import {animate, style, transition, trigger} from "@angular/animations";

const easeInOutCubic = 'cubic-bezier(0.645, 0.045, 0.355, 1)';

export function routerTransition() {
    return trigger('routerTransition', [
        transition('void => *', [
            style({
                position: 'fixed',
                left: '0',
                right: '0',
                height: '100%',
                transform: 'translateX(100%)',
                opacity: '0'
            }),
            animate('.6s ' + easeInOutCubic, style({transform: 'translateX(0%)', opacity: '1'}))
        ]),
        transition('* => void', [
            style({
                position: 'fixed',
                left: '0',
                right: '0',
                height: '100%',
                transform: 'translateX(0%)',
                opacity: '1'
            }),
            animate('.4s ' + easeInOutCubic, style({transform: 'translateX(-100%)', opacity: '0'}))
        ])
    ]);
}

export function projectTransition() {
    return trigger('projectTransition', [
        transition('void => *', [
            style({opacity: '0'}),
            animate('.3s ease-in', style({opacity: '1'}))
        ])
    ]);
}
