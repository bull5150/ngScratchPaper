import { Component, OnInit } from '@angular/core';
import { GoogleMapsAPIWrapper } from '@agm/core/services/google-maps-api-wrapper';
import { marker } from '../models/map_markers';

declare var markerCheck: boolean;
declare var markers: marker[];
declare var google: any;

@Component({
  selector: 'google',
  templateUrl: './googlemap.component.html',
  styleUrls: ['./googlemap.component.css']
})
export class GooglemapComponent implements OnInit {

  title: string = 'My first AGM project';
  zoom: number = 12;
  lat: number = 41.2632231;
  lng: number = -96.0524403;

  markers: marker[] = this.markers;
  markerCheck = false;

  constructor() {}

  ngOnInit() {
  }

  addMarkers() {
    if (!this.markerCheck){
      this.markers = [
        {
          lat: 41.290318,
          lng: -96.052452,
          label: 'A',
          draggable: false
        },
        {
          lat: 41.217667,
          lng: -95.990936,
          label: 'B',
          draggable: false
        },
        {
          lat: 41.300728,
          lng: -96.023224,
          label: 'C',
          draggable: false
        },
        {
          lat: 41.233837,
          lng: -96.044960,
          label: 'D',
          draggable: false
        },
        {
          lat: 41.292828,
          lng: -96.125809,
          label: 'E',
          draggable: false
        },
        {
          lat: 41.203472,
          lng: -96.134857,
          label: 'F',
          draggable: false
        },
        {
          lat: 41.208477,
          lng: -96.080696,
          label: 'G',
          draggable: false
        },
        {
          lat: 41.261623,
          lng: -95.897903,
          label: 'H',
          draggable: false
        },
        {
          lat: 41.234615,
          lng: -96.184059,
          label: 'I',
          draggable: false
        },
        {
          lat: 41.234056,
          lng: -96.101227,
          label: 'I',
          draggable: false
        }
      ]
      this.markerCheck = true;
    }
    else{
      this.markers = []
      this.markerCheck = false;
    }
 
  }
}
