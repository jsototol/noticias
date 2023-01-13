import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { GoogleMaps, GoogleMap, LatLng } from '@ionic-native/google-maps';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {
  map: GoogleMap;

  constructor(
    private googleMaps: GoogleMaps,
    private geolocation: Geolocation
  ) {
    this.map = this.googleMaps.create('map_canvas');
  }

  ngOnInit(): void {}

  ionViewDidLoad() {
    Geolocation.getCurrentPosition().then((resp) => {
      let latLng = new LatLng(resp.coords.latitude, resp.coords.longitude);
      this.map = this.googleMaps.create('map_canvas', {
        camera: {
          target: latLng,
          zoom: 18,
          tilt: 30,
        },
      });
      this.map.addMarker({
        title: 'Ionic',
        icon: 'blue',
        animation: 'DROP',
        position: latLng,
      });
    });
  }
}
