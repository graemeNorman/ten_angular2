import {Component, ViewEncapsulation } from '@angular/core';
import globalSettings = require('./settings/globals');
import brandSettings = require('./settings/brands/coutts/settings');
//import brandSettings = require(brandSettingsPath);

@Component({
    selector: 'app-root',
    templateUrl: './app/app.component.html',
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {

    currentBrand: string;
    dining: boolean;
    entertainment: boolean;
    travel: boolean;
    events: boolean;
    home: boolean;

    constructor(){
        this.currentBrand = globalSettings.brand;

        this.dining = brandSettings.mod_dining;
        this.entertainment = brandSettings.mod_entertainment;
        this.travel = brandSettings.mod_travel;
        this.events = brandSettings.mod_events;
        this.home = brandSettings.mod_home;

    };

}