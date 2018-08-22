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

  public positions = [];
  public branchMarkers = [];
  public kmlURL: string;
  public googleMap: any;
  public is_traffic: boolean;
  public is_noaa: boolean;
  public is_airQ: boolean;
  public is_drawing: boolean;
  public trafficLayer: google.maps.TrafficLayer;
  public noaaKMLLayer: google.maps.KmlLayer;
  public airKMLLayer: google.maps.KmlLayer;
  public mapDrawing: google.maps.drawing.DrawingManager;

  constructor() { }

  ngOnInit() {
    this.is_traffic = false;
    this.is_noaa = false;
    this.is_airQ = false;
    this.is_drawing = false;
  }

  onMapReady(map) {
    this.googleMap = map
    this.googleMap
    
    console.log('map', map);
    console.log('markers', map.markers);  // to get all markers as an array 
    //this.getBranchMarkers(map);
  }

  getBranchMarkers(map) {
    const marker = new google.maps.Marker(
    );
    marker.setPosition(new google.maps.LatLng(41.260425, -96.082801));
    marker.setTitle("this happened");
    marker.setMap(map);
    this.branchMarkers.push(marker);
    console.log(this.branchMarkers[0]);
  }
  //function for the drawing objects controller, driven off flag is_drawing
  enableDrawing(){
    if(this.is_drawing == false)
    {
      this.mapDrawing = new google.maps.drawing.DrawingManager({
        drawingMode: google.maps.drawing.OverlayType.MARKER,
        drawingControl: true,
        drawingControlOptions: {
          position: google.maps.ControlPosition.TOP_CENTER,
        },
      });
      google.maps.event.addListener(this.mapDrawing, 'polylinecomplete', function (polyline) {
        console.log("looks like you made a polyline, congratulations!")
      })
      this.mapDrawing.setMap(this.googleMap);
      this.is_drawing = true;
    }
    else
    {
      this.mapDrawing.setMap(null);
      this.is_drawing = false;
    }
  }
  //function for the NOAA Weather Layer button, driven off flag is_noaa
  setNOAAKML(){
    if(this.is_noaa == false)
    {
      this.noaaKMLLayer = new google.maps.KmlLayer({
        url: "http://www.wpc.ncep.noaa.gov/kml/noaa_chart/WPC_Day1_SigWx.kml",
        map: this.googleMap,
      });
      this.is_noaa = true;
    }
    else
    {
      this.noaaKMLLayer.setMap(null);
      this.is_noaa = false;
    }
  }
  //function for the Air Now Layer button, driven off flag is_airQ
  setAirQualityKML(){
    if(this.is_airQ == false)
    {
      this.airKMLLayer = new google.maps.KmlLayer({
        url: "http://files.airnowtech.org/airnow/today/airnow_conditions.kml",
        map: this.googleMap,
      });
      this.is_airQ = true;
    }
    else
    {
      this.airKMLLayer.setMap(null);
      this.is_airQ = false;
    }
  }
  //function for the traffic layer button, driven off flag is_traffic
  setTrafficLayer(){
    if (this.is_traffic == false)
    {
      this.trafficLayer = new google.maps.TrafficLayer({map: this.googleMap});
      this.is_traffic = true;
    }
    else
    {
      this.trafficLayer.setMap(null);
      this.is_traffic = false;
    }
  }
}
