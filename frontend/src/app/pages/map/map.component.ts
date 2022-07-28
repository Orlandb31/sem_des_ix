import { element } from 'protractor';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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

  data!: any
  map!: mapboxgl.Map;
  popup!: mapboxgl.Popup;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 8.981768537699347;
  lng = -79.52259313474727;

  constructor(private publicPagesService: PublicPagesService, private router: Router ) { }

  getEvents(){
    this.publicPagesService.getEvents()
      .subscribe(
        res =>{
          this.data = res
          for(let d of this.data){
            longitud: d.lng
            
          }
        }
      )
  }

  ngOnInit(): void{

    const cen = getCenter([
      { latitude: 8.981768537699347, longitude: -79.52259313474727 },
      { latitude: 51.515, longitude: 7.453619 },
      { latitude: 51.503333, longitude: -0.119722 },
    ]);
    
    // console.log(Object.values(cen));


    (mapboxgl as any).accessToken = environment.mapbox.accessToken;
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 12,
      
    });
    this.map.addControl(new mapboxgl.NavigationControl());

  }

}
