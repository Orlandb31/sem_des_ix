import { PrivatePagesService } from './../../services/private-pages.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { environment } from '../../../environments/environment';
import AWSS3UploadAshClient from 'aws-s3-upload-ash';
import { UploadResponse } from 'aws-s3-upload-ash/dist/types';

@Component({
  selector: 'app-publisher-event',
  templateUrl: './publisher-event.component.html',
  styleUrls: ['./publisher-event.component.scss']
})
export class PublisherEventComponent implements OnInit {

  event = {
    "createDate": "",
    "name":"",
    "category":"",
    "description":"",
    "eventDay":"",
    "eventHour": "",
    "tickets": 0,
    "city":"",
    "nameImg":""
  }

  fileName = '';

  constructor( private privatePageServices: PrivatePagesService, private router: Router) { }

  ngOnInit(): void { 
    
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
        }
      );
    }
  }

  createEvent() {
    const locals = localStorage.getItem('img')
    this.event.nameImg = `${locals}`
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
