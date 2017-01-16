import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { HomeComponent } from './home/home.component';
import {routing} from "./app.routing";

@NgModule({
  imports:      [ BrowserModule, routing ], //other modules the app depends on
  declarations: [ AppComponent, HomeComponent ], // declare all directives and components
  bootstrap : [ AppComponent ] // root component to bootstrap
})
export class AppModule { }