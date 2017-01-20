import { Component } from '@angular/core';
import myGlobals = require('./globals');

@Component({
    selector: 'app-root',
    host: {
        '[class]' : 'classNames'
    },
    templateUrl: './app/app.component.html',
})
export class AppComponent {

    classNames: string;

    constructor(){
        this.classNames = myGlobals.brands

    };

}