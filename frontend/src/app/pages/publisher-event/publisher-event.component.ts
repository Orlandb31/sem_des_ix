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

  tasks = []

  event = {
    "createDate": "",
    "name":"",
    "category":"",
    "description":"",
    "eventDay":"",
    "eventHour": "",
    "tickets": 0,
    "city":"",
  }

  fileSelected: any = null;
  config = {
    bucketName: 'ibu-image',
    region: 'us-east-1',
    accessKeyId: environment.AWS_ACCESS_KEY,
    secretAccessKey: environment.AWS_SECRET_KEY,
    s3Url: 'https://ibu-images.s3.amazonaws.com/flayers'
  }

  S3CustomClient: AWSS3UploadAshClient = new AWSS3UploadAshClient(this.config);

  constructor( private privatePageServices: PrivatePagesService, private router: Router) { }

  ngOnInit(): void { }

  onChangeFile(event: any) {
    console.log(event.target.files[0])
    this.fileSelected = event.target.files[0]
  }

  async handleSendFile() {
    console.log(environment)
    console.log("handleSendFile")
    await this.S3CustomClient
      .uploadFile(this.fileSelected, this.fileSelected.type, undefined, this.fileSelected.name, "public-read")
      .then((data: UploadResponse) => console.log(data))
      .catch((err: any) => console.error(err))
  }

  createEvent(){

    this.handleSendFile()

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
