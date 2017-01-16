import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';

@NgModule({
  imports:      [ BrowserModule ], //other modules the app depends on
  declarations: [ AppComponent ], // declare all derectives and components
  bootstrap : [ AppComponent ] // root component to bootstarp
})
export class AppModule { }