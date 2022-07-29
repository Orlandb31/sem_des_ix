import { element } from 'protractor';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ModalSwitchService } from '../../services/modal-switch.service'
import { PublicPagesService } from '../../services/public-pages.service'
import { Router } from '@angular/router'
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  
  modalSignin: boolean;
  modalSignup: boolean;
  data: any
  finalData: any
  listenForm: FormControl = new FormControl()

  constructor( 
    private modalSign: ModalSwitchService,
    private router: Router, 
    public authService: AuthService, 
    private publicPagesService: PublicPagesService 
    ) {
    this.modalSignin = false
    this.modalSignup = false
   }

  ngOnInit(): void {
    this.modalSign.$modal.subscribe( (value) => {this.modalSignin = value})
    this.modalSign.$modalSingup.subscribe( (value) => {this.modalSignup = value})

    const $info = this.publicPagesService.getEvents()
      $info.subscribe(
        res =>{
         this.data = res
        } 
      )
  }

  openSignin() {
    this.modalSignin = true
  }

  openSignup() {
    this.modalSignup = true
  }

  eventCategory(element: any){
    this.publicPagesService.getEventCategory(element)
      .subscribe(
        res => { 
          console.log(res)
          this.data = res
        }
      )
  }

  openInfo(element: any){
    localStorage.setItem('event-description', element.description)
    localStorage.setItem('event-img', element.nameImg)
    localStorage.setItem('event-name', element.name)
    this.router.navigate(['eventinfo'])
  }

}
