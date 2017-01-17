
import {Component} from '@angular/core';

@Component({
    selector: 'testDirective',
    templateUrl: './app/directives/form.template.html'
})

export class testDirective {
    forename, surname, email, tel : string;
    constructor(){
        this.forename = "Please enter your first name"
        this.surname = "Please enter your last name"
        this.email = "Please enter an email address"
        this.tel = "Please enter a telephone number"
    };
}
