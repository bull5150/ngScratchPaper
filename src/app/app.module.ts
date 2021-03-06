import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core';
import { routing } from './app.routing.module';
import { FormsModule } from '@angular/forms';
import { NguiMapModule} from '@ngui/map';
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
import { ApitesterService } from './apitester.service';


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
      HttpClientModule,
      AmChartsModule,
      NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=[YourAPIKeyHere]&libraries=drawing'}),
    AgGridModule.withComponents(
      [AggridgreenComponent, AggridredComponent]
    ),
    NgbModule.forRoot()
  ],
  providers: [ApitesterService],
  bootstrap: [AppComponent]
})
export class AppModule { }



