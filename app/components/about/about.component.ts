import {Component} from '@angular/core';
import { SettingService } from "../../setting.service";

@Component({
    selector: 'app-about',
    templateUrl: './app/components/about/about-template.html',
    styleUrls: ['./css/components/about/about.css']
})

export class AboutComponent {
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

