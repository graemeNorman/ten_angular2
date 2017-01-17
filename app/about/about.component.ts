import {Component} from '@angular/core';
import {testDirective} from '../directives/form.directive';

@Component({
    selector: 'app-about',
    templateUrl: './app/about/about-template.html',
    directives: [testDirective]
})
export class AboutComponent {
    welcome : string;
    constructor(){
        this.welcome = "Template Demo 2"
    };
};

