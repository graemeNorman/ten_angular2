import {Component, ViewEncapsulation } from '@angular/core';
import globalSettings = require('./settings/globals');

@Component({
    selector: 'app-root',
    templateUrl: './app/app.component.html',
    styleUrls: ['./css/themes/' + globalSettings.brand + '/oocss.css'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {

    currentBrand: string;

    constructor(){
        this.currentBrand = globalSettings.brand;
    };

}