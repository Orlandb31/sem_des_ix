import { Component, OnInit } from '@angular/core';
import { ModalSwitchService } from '../../services/modal-switch.service'

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  
  modalSignin:boolean;
  modalSignup: boolean;

  constructor( private modalSign: ModalSwitchService ) {
    this.modalSignin = false
    this.modalSignup = false
   }

  ngOnInit(): void {
    this.modalSign.$modal.subscribe( (value) => {this.modalSignin = value})
    this.modalSign.$modalSingup.subscribe( (value) => {this.modalSignup = value})
  }

  openSignin() {
    this.modalSignin = true
  }

  openSignup() {
    this.modalSignup = true
  }

}
