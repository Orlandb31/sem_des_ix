import { PrivatePagesService } from './../../services/private-pages.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import * as mapboxgl from 'mapbox-gl';
import { environment } from '../../../environments/environment';
import AWSS3UploadAshClient from 'aws-s3-upload-ash';
import { UploadResponse } from 'aws-s3-upload-ash/dist/types';

@Component({
  selector: 'app-publisher-event',
  templateUrl: './publisher-event.component.html',
  styleUrls: ['./publisher-event.component.scss']
})
export class PublisherEventComponent implements OnInit {

  map!: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 8.981768537699347;
  lng = -79.52259313474727;

  event = {
    "createDate": "",
    "name":"",
    "category":"",
    "description":"",
    "eventDay":"",
    "eventHour": "",
    "tickets":0,
    "city":"",
    "nameImg":"",
    "lng":"",
    "lat":"",
    "state":"Active",
    "price":0,
    "invent":0
  }

  fileName = '';

  constructor( private privatePageServices: PrivatePagesService, private router: Router) { }

  ngOnInit(): void { 
    (mapboxgl as any).accessToken = environment.mapbox.accessToken;
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 12,
      center: [this.lng, this.lat]
    });
    this.map.addControl(new mapboxgl.NavigationControl());
    this.createMarker(this.lng, this.lat)
  }

  createMarker(lng: number, lat: number){
    const marker = new mapboxgl.Marker({
      draggable:true
    }).setLngLat([lng,lat])
      .addTo(this.map)

    marker.on('dragend', () => {
      console.log(marker.getLngLat())
      console.log("Lat",lat )
      console.log("Long", lng)
    }) 
  }
  
  onChangeFile(event: any) {
    const file:File = event.target.files[0];
    if(file){
      console.log("Hay un archivo")
      this.fileName = file.name;
      const formData = new FormData();
      formData.append("image", file);
      console.log(formData)
      const upload$ = this.privatePageServices.createEvent(formData)
      upload$.subscribe(
        res =>{
          console.log("Resouesta", res)
          localStorage.setItem('img', res.imgUrl)
          localStorage.setItem('img_id_temp', res._id)
          this.deleteEvenTemp()
        }
      );
    }
  }

  deleteEvenTemp(){
    this.privatePageServices.deleteEvent(localStorage.getItem('img_id_temp'))
      .subscribe(
        res =>{
          console.log(res)
        }
      )
  }

  createEvent() {
    const locals = localStorage.getItem('img')
    this.event.nameImg = `${locals}`
    this.event.lng = `${this.lng}`
    this.event.lat = `${this.lat}`
    this.event.invent = this.event.tickets

    console.log(this.event)
    this.privatePageServices.createEvent(this.event)
      .subscribe(
        res => {
          console.log("Evento creado", res)
          this.router.navigate([''])
        },
        err => console.log(err)
      )
  }
}
