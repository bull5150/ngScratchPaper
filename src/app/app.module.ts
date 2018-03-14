import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing.module';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GooglemapComponent } from './googlemap/googlemap.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GooglemapComponent,
    HomeComponent
  ],
  imports: [
    routing,
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC5yDYGGb2IWb74lt6cyPVqTKcDSqajKKY'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



