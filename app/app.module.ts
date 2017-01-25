import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CardsComponent } from './cards/cards.component';
import { routing } from "./app.routing";

// Directives
import { testDirective } from "./directives/form.directive";
import { SettingService } from "./setting.service";

@NgModule({
  imports:      [ BrowserModule, routing ], //other modules the app depends on
  providers: [ SettingService ],
  declarations: [ AppComponent, HomeComponent, AboutComponent, CardsComponent, testDirective ], // declare all directives and components
  bootstrap : [ AppComponent ] // root component to bootstrap
})

export class AppModule { }
