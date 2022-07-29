import { LandingComponent } from './../landing/landing.component';
import { element } from 'protractor';
import { Component, OnInit, ChangeDetectorRef, NgZone } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from '../../../environments/environment';
import getCenter from 'geolib/es/getCenter'
import { PublicPagesService } from '../../services/public-pages.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  data!: any;
  data2!: any;
  map!: mapboxgl.Map;
  popup!: mapboxgl.Popup;

  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 8.981768537699347;
  lng = -79.52259313474727;

  jsonLocation = { feature: [ { latitude:0,longitude:0, imgUrl: "nada" }], };

  constructor(private publicPagesService: PublicPagesService, private router: Router, private ngZone: NgZone ) { }

  async getEvents() {
    return this.publicPagesService.getEvents()
      .toPromise() 
  }

  async ngOnInit(): Promise<void> {

    const res = await this.getEvents();
    this.data = res

    for (let d of this.data) {
      this.jsonLocation.feature.push({latitude:d.lat,longitude:d.lng, imgUrl: d.nameImg});
    }

    (mapboxgl as any).accessToken = environment.mapbox.accessToken;
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 12,
      center: [this.lng, this.lat]
    });
    this.map.addControl(new mapboxgl.FullscreenControl({ container: document.querySelector('body') }));
    
    const obj = this.jsonLocation.feature

    for(let x=0; x < obj.length ; x++){
      new mapboxgl.Marker()
        .setLngLat([obj[x].longitude, obj[x].latitude])
        .setPopup(
          new mapboxgl.Popup({ offset: 25 })
          .setHTML(
            `<img width="100" src=http://localhost:3000/public/${obj[x].imgUrl}>`
          )
        )
        .addTo(this.map)
    }
  }

  eventCategory(element: any){
    if(element == "Musical"){
      console.log(element)
    }
  }

  openInfo(element: any){
    localStorage.setItem('event-description', element.description)
    localStorage.setItem('event-img', element.nameImg)
    localStorage.setItem('event-name', element.name)
    this.router.navigate(['eventinfo'])
  }

  
}