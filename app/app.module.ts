import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { testDirective } from './directives/form.directive';
import { routing } from "./app.routing";

// Material Design Imports
import { MdCardModule } from '@angular2-material/card';
import { MdButtonModule } from '@angular2-material/button';
import { MdIconModule } from '@angular2-material/icon';
import { MdIconRegistry } from '@angular2-material/icon';
import { testDirective } from "./directives/form.directive";

@NgModule({
  imports:      [ BrowserModule, routing, MdCardModule, MdButtonModule, MdIconModule ], //other modules the app depends on
  declarations: [ AppComponent, HomeComponent, AboutComponent, testDirective ], // declare all directives and components
  bootstrap : [ AppComponent ], // root component to bootstrap
  providers: [ MdIconRegistry ]
})

export class AppModule { }
