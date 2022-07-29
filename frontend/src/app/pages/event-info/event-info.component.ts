import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-event-info',
  templateUrl: './event-info.component.html',
  styleUrls: ['./event-info.component.scss']
})
export class EventInfoComponent implements OnInit {
  description: any
  img: any
  
  constructor( private router: Router,) { }

  ngOnInit(): void {
    this.description = localStorage.getItem('event-description')
    this.img = localStorage.getItem('event-img')
  }

  buyRequest(){
    this.router.navigate(['payrequest'])
  }

}
