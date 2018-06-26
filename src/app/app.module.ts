import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing.module';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { AgGridModule } from 'ag-grid-angular/main';
import { AmChartsModule } from '@amcharts/amcharts3-angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GooglemapComponent } from './googlemap/googlemap.component';
import { HomeComponent } from './home/home.component';
import { AggridComponent } from './aggrid/aggrid.component';
import { AggridredComponent } from './aggridred/aggridred.component';
import { FormsreviewComponent } from './formsreview/formsreview.component';
import { AggridgreenComponent } from './aggridgreen/aggridgreen.component';
import { AmchartComponent } from './amchart/amchart.component';


@NgModule({
   declarations: [
      AppComponent,
      NavbarComponent,
      GooglemapComponent,
      HomeComponent,
      AggridComponent,
      AggridredComponent,
      FormsreviewComponent,
      AggridgreenComponent,
      AmchartComponent
   ],
   imports: [
      routing,
      BrowserModule,
      Angular2FontawesomeModule,
      FormsModule,
      AmChartsModule,
      AgmCoreModule.forRoot({
        apiKey: 'AIzaSyC5yDYGGb2IWb74lt6cyPVqTKcDSqajKKY'
      }),
    AgGridModule.withComponents(
      [AggridgreenComponent, AggridredComponent]
    ),
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



