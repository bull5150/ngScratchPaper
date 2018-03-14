import { Component, OnInit } from '@angular/core';
import { GoogleMapsAPIWrapper } from '@agm/core/services/google-maps-api-wrapper';

declare var google: any;

@Component({
  selector: 'google',
  templateUrl: './googlemap.component.html',
  styleUrls: ['./googlemap.component.css']
})
export class GooglemapComponent implements OnInit {

  title: string = 'My first AGM project';
  lat: number = 41.2632231;
  lng: number = -96.0524403;

  constructor() { }

  ngOnInit() {
  }

}
