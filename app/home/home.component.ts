import {Component} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './app/home/home-template.html'
})
export class HomeComponent {
    welcome : string;
    constructor(){
        this.welcome = "Welcome to home page";
    };
};