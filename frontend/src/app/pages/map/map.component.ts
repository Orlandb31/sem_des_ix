import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from '../../../environments/environment';
import getCenter from 'geolib/es/getCenter'


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  map!: mapboxgl.Map;
  popup!: mapboxgl.Popup;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 8.981768537699347;
  lng = -79.52259313474727;

  constructor() { }

  ngOnInit(): void {
    (mapboxgl as any).accessToken = environment.mapbox.accessToken;
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 12,
      center: [this.lng, this.lat]
    });
    this.map.addControl(new mapboxgl.NavigationControl());

    this.map.on('load', () => {
      this.map.addSource('places', {
        'type': 'geojson',
        'data': {
          'type': 'FeatureCollection',
          'features': [
            {
              'type': 'Feature',
              'properties': {
                'description':
                  '<strong>Make it Mount Pleasant</strong><p>Make it Mount Pleasant is a handmade and vintage market and afternoon of live entertainment and kids activities. 12:00-6:00 p.m.</p>'
              },
              'geometry': {
                'type': 'Point',
                'coordinates': [-79.52726014032058, 9.026918075946888],
              }
            },
            {
              'type': 'Feature',
              'properties': {
                'description':
                  '<strong>Mad Men Season Five Finale Watch Party</strong><p>Head to Lounge 201 (201 Massachusetts Avenue NE) Sunday for a Mad Men Season Five Finale Watch Party, complete with 60s costume contest, Mad Men trivia, and retro food and drink. 8:00-11:00 p.m. $10 general admission, $20 admission and two hour open bar.</p>'
              },
              'geometry': {
                'type': 'Point',
                'coordinates': [-79.5272596910077, 9.021386589744129]
              }
            },
            {
              'type': 'Feature',
              'properties': {
                'description':
                  '<strong>Mad Men Season Five Finale Watch Party</strong><p>Head to Lounge 201 (201 Massachusetts Avenue NE) Sunday for a Mad Men Season Five Finale Watch Party, complete with 60s costume contest, Mad Men trivia, and retro food and drink. 8:00-11:00 p.m. $10 general admission, $20 admission and two hour open bar.</p>'
              },
              'geometry': {
                'type': 'Point',
                'coordinates': [ -79.53481650882175, 9.009117523136368]
              }
            }
          ]
        }
      });

      this.map.addLayer({
        'id': 'places',
        'type': 'circle',
        'source': 'places',
        'paint': {
        'circle-color': '#4264fb',
        'circle-radius': 6,
        'circle-stroke-width': 2,
        'circle-stroke-color': '#ffffff'
        }
        });

        this.popup = new mapboxgl.Popup({
          closeButton: false,
          closeOnClick: false
        });

        this.map.on('mouseleave', 'places', () => {
          this.map.getCanvas().style.cursor = '';
          this.popup.remove();
          });
    });
  }   
}
