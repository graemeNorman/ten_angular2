import {Injectable} from "@angular/core";

@Injectable()
export class SettingService {
  getSettings(): Object {
    return {
      primary_color: 'blue',
      font_size: '13px',
      font_family: 'Helvetica'
    };
  }
}