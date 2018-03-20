import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing.module';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { AgGridModule } from 'ag-grid-angular/main';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GooglemapComponent } from './googlemap/googlemap.component';
import { HomeComponent } from './home/home.component';
import { AggridComponent } from './aggrid/aggrid.component';
import { AggridredComponent } from './aggridred/aggridred.component';
import { FormsreviewComponent } from './formsreview/formsreview.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GooglemapComponent,
    HomeComponent,
    AggridComponent,
    AggridredComponent,
    FormsreviewComponent
  ],
  imports: [
    routing,
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC5yDYGGb2IWb74lt6cyPVqTKcDSqajKKY'
    }),
    AgGridModule.withComponents(
      [AggridredComponent]
    ),
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



