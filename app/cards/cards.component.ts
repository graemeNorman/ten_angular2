import {Component} from '@angular/core';
import {testDirective} from '../directives/form.directive';

@Component({
    selector: 'app-cards',
    templateUrl: './app/cards/cards.template.html'
})
export class CardsComponent {
    title : string;
    constructor(){
        this.title = "Front end cards responsive test"
    };
};

