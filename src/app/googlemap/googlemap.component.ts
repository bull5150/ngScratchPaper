import { Component, OnInit } from '@angular/core';
import { GoogleMapsAPIWrapper } from '@agm/core/services/google-maps-api-wrapper';
import { marker } from '../models/map_markers';
import { forEach } from '@angular/router/src/utils/collection';

declare var markerCheck: boolean;
declare var markers: marker[];
declare var google: any;

@Component({
  selector: 'google',
  templateUrl: './googlemap.component.html',
  styleUrls: ['./googlemap.component.css']
})
export class GooglemapComponent implements OnInit {

  public mapMarkers: google.maps.Marker[];
  public drawnPolys: google.maps.Polyline[];
  public drawnCircles: google.maps.Circle[];
  public kmlURL: string;
  public googleMap: any;
  public is_marker: boolean;
  public is_traffic: boolean;
  public is_noaa: boolean;
  public is_airQ: boolean;
  public is_fire: boolean;
  public is_drawing: boolean;
  public trafficLayer: google.maps.TrafficLayer;
  public noaaKMLLayer: google.maps.KmlLayer;
  public airKMLLayer: google.maps.KmlLayer;
  public fireKMLLayer: google.maps.KmlLayer;
  public mapDrawing: google.maps.drawing.DrawingManager;

  constructor() {}

  ngOnInit() {
    this.is_marker = false;
    this.is_traffic = false;
    this.is_noaa = false;
    this.is_airQ = false;
    this.is_drawing = false;
    this.is_fire = false;
    this.mapMarkers = [];
    this.drawnPolys = [];
    this.drawnCircles = [];
  }
  //when map loads
  onMapReady(map) {
    this.googleMap = map
  }
  //function for the markers, driven off flag is_marker and yes I know its kind of ugly
  setMarkers() {
    if(this.is_marker == false)
    {
      const marker1 = new google.maps.Marker();
      marker1.setPosition(new google.maps.LatLng(33.930450, -84.349250));
      marker1.setTitle("They have the meats!");
      marker1.setIcon("assets/media/arbys-logo.png");
      marker1.setMap(this.googleMap);
      this.mapMarkers.push(marker1);
      const marker2 = new google.maps.Marker();
      marker2.setPosition(new google.maps.LatLng(37.422160, -122.084270));
      marker2.setTitle("Google HQ");
      marker2.setIcon("assets/media/google-logo.png");
      marker2.setMap(this.googleMap);
      this.mapMarkers.push(marker2);
      const marker3 = new google.maps.Marker();
      marker3.setPosition(new google.maps.LatLng(47.609920, -122.339020));
      marker3.setTitle("Amazon HQ");
      marker3.setIcon("assets/media/amazon-logo.png");
      marker3.setMap(this.googleMap);
      this.mapMarkers.push(marker3);
      const marker4 = new google.maps.Marker();
      marker4.setPosition(new google.maps.LatLng(47.639890, -122.125090));
      marker4.setTitle("Microsoft HQ");
      marker4.setIcon("assets/media/microsoft-logo.png");
      marker4.setMap(this.googleMap);
      this.mapMarkers.push(marker4);
      const marker5 = new google.maps.Marker();
      marker5.setPosition(new google.maps.LatLng(37.333470, -122.012000));
      marker5.setTitle("Apple HQ");
      marker5.setIcon("assets/media/apple-logo.png");
      marker5.setMap(this.googleMap);
      this.mapMarkers.push(marker5);
      const marker6 = new google.maps.Marker();
      marker6.setPosition(new google.maps.LatLng(37.423370, -122.070930));
      marker6.setTitle("LinkedIn HQ");
      marker6.setIcon("assets/media/linkedin-logo.png");
      marker6.setMap(this.googleMap);
      this.mapMarkers.push(marker6);
      const marker7 = new google.maps.Marker();
      marker7.setPosition(new google.maps.LatLng(37.484379, -122.148308));
      marker7.setTitle("Facebook HQ");
      marker7.setIcon("assets/media/facebook-logo.png");
      marker7.setMap(this.googleMap);
      this.mapMarkers.push(marker7);
      const marker8 = new google.maps.Marker();
      marker8.setPosition(new google.maps.LatLng(37.789850, -122.396800));
      marker8.setTitle("Salesforce HQ");
      marker8.setIcon("assets/media/salesforce-logo.png");
      marker8.setMap(this.googleMap);
      this.mapMarkers.push(marker8);
      this.is_marker = true
    }
    else
    {
      this.mapMarkers.forEach(marker =>{
        marker.setMap(null);
        
      });
      this.mapMarkers = [];
      this.is_marker = false;
    }
  }
  //function for the drawing objects controller, driven off flag is_drawing
  enableDrawing(things){
    const thisComponent = this;
    if(this.is_drawing == false)
    {
      this.mapDrawing = new google.maps.drawing.DrawingManager({
        drawingMode: google.maps.drawing.OverlayType.MARKER,
        drawingControl: true,
        drawingControlOptions: {
          position: google.maps.ControlPosition.TOP_CENTER,
          drawingModes: ['marker', 'circle', 'polyline']
        },
      });
      google.maps.event.addListener(this.mapDrawing, 'polylinecomplete', function (polyline) {
        thisComponent.drawnPolys.push(polyline);
      });
      google.maps.event.addListener(this.mapDrawing, 'circlecomplete', function (circle) {
        thisComponent.drawnCircles.push(circle);
      })
      this.mapDrawing.setMap(this.googleMap);
      this.is_drawing = true;
    }
    else
    {
      this.drawnPolys.forEach(item => {
        item.setMap(null);
      });
      this.drawnCircles.forEach(item => {
        item.setMap(null);
      });
      this.drawnPolys = [];
      this.drawnCircles = [];
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
  //function for the Fire Layer button, driven off flag is_fire
  setFireKML(){
    if(this.is_fire == false)
    {
      this.fireKMLLayer = new google.maps.KmlLayer({
        url: "https://fsapps.nwcg.gov/data/kml/conus_latest_lg_incidents.kml",
        map: this.googleMap,
      });
      this.is_fire = true;
    }
    else
    {
      this.fireKMLLayer.setMap(null);
      this.is_fire = false;
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
