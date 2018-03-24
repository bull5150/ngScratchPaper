import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GooglemapComponent } from './googlemap/googlemap.component';
import { HomeComponent } from './home/home.component'
import { AppComponent } from './app.component';
import {AggridComponent } from './aggrid/aggrid.component';
import { FormsreviewComponent } from './formsreview/formsreview.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'google', component: GooglemapComponent },
  { path: 'aggrid', component: AggridComponent },
  { path: 'forms', component: FormsreviewComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, {
  useHash: true
});
