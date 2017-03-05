import {animate, trigger, style, transition} from "@angular/core";

let startingStyles = (styles) => {
    styles['position'] = 'fixed';
    styles['left'] = 0;
    styles['right'] = 0;
    styles['height'] = '100%';
    return styles;
};

export function routerTransition() {
    return trigger('routerTransition', [
        transition('void => *', [
            style(startingStyles({
                transform: 'translateX(100%)',
                opacity: '0'
            })),
            animate('.6s linear', style({ transform: 'translateX(0%)', opacity: '1'}))
        ]),
        transition('* => void', [
            style(startingStyles({
                transform: 'translateX(0%)',
                opacity: '1'
            })),
            animate('.4s linear', style({ transform: 'translateX(-100%)', opacity: '0'}))
        ])
    ]);
}

export function projectTransition() {
    return trigger('projectTransition', [
        transition('void => *', [
            style({opacity: '0'}),
            animate('.3s ease-in', style({opacity: '1'}))
        ]),
        transition('* => void', [

        ])
    ]);
}
