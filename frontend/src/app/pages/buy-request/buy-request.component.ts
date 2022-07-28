import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { PrivatePagesService } from './../../services/private-pages.service';

@Component({
  selector: 'app-buy-request',
  templateUrl: './buy-request.component.html',
  styleUrls: ['./buy-request.component.scss']
})
export class BuyRequestComponent implements OnInit {
  
  description: any
  img: any
  name: any
  data: any

  constructor( private router: Router,  private privatePageServices: PrivatePagesService ) { }

  ngOnInit(): void {
    this.description = localStorage.getItem('event-description')
    this.img = localStorage.getItem('event-img')
    this.name = localStorage.getItem('event-name')
  }
  
  payWithYappy(){
    const name = "yisus";
    const price = 0.02;

    const event = {
      name,
      price
    }

    this.privatePageServices.payYappy(event).
      subscribe(
        res => { 
          this.data = res
          console.log(this.data.url)
          window.open(this.data.url, "_blank")
        },
        err => console.log(err)
      )
  }


}
