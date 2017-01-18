import {Component} from '@angular/core';
import {testDirective} from '../directives/form.directive';

@Component({
    selector: 'app-about',
    templateUrl: './app/about/about-template.html',
    directives: [testDirective]
})
export class AboutComponent {
    theme1, theme2, theme3 : string;
    constructor(){
        this.theme1 = "Light Theme",
        this.theme2 = "Dark Theme",
        this.theme3 = "Luxurious Theme"
    };
};

