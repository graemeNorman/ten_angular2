import {Component, ViewEncapsulation} from '@angular/core';
import { SettingService } from "../../setting.service";
import globalSettings = require('../../settings/globals');


@Component({
    selector: 'app-event',
    templateUrl: './app/components/event/event-template.html',
    styleUrls: ['./css/components/event/event.css'],
    encapsulation: ViewEncapsulation.Native
})

export class EventComponent {
    theme1: string;
    theme2: string;
    theme3 : string;
    settings: Object;
    sett: Object;

    constructor(private _settingService: SettingService){
        this.theme1 = "Light Theme",
        this.theme2 = "Dark Theme",
        this.theme3 = "Luxury Theme";
        this.settings = _settingService.getSettings();
        this.sett = JSON.stringify(_settingService.getSettings());
    };

};

