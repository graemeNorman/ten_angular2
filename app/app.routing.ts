import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component'; //import home components
import { AboutComponent } from './components/about/about.component'; //import about components
import { CardsComponent} from './components/cards/cards.component'; //import cards components
import { EventComponent} from './components/event/event.component'; //import event components

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'events', component: EventComponent },
  { path: '', component: HomeComponent, pathMatch: 'full'} // redirect to home page on load
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);