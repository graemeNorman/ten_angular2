import {Component} from '@angular/core';
import {testDirective} from '../directives/form.directive';
import myGlobals = require('../globals');

@Component({
    selector: 'about_demo',
    host: {
        '[class]' : 'classNames'
    },
    templateUrl: './app/about/about-template.html',
    styleUrls: [ '../../css/brands/' + myGlobals.brands + '/theme/' + myGlobals.theme + '.css'  ],
    directives: [testDirective]
})
export class AboutComponent {

    currentTheme: string;
    currentBrand: string;
    classNames: string;
    theme1 : string;
    theme2 : string;
    theme3 : string;
    constructor(){
        this.classNames = 'page__container';

        this.theme1 = "Modern Theme",
        this.theme2 = "Dark Theme",
        this.theme3 = "Luxurious Theme"
        this.currentTheme = myGlobals.theme
        this.currentBrand = myGlobals.brands
    };

};

