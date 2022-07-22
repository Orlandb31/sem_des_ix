import { Component, OnInit } from '@angular/core';
import { ModalSwitchService } from '../../services/modal-switch.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  
  modalSignin:boolean;
  modalSignup: boolean;

  constructor( private modalSign: ModalSwitchService, private router: Router ) {
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

  publshVerify(){
    if (localStorage.getItem('token')){
      this.router.navigate(['/publishevent'])
    }else { 
      this.openSignin()
    }
      
    // localStorage.setItem('token', res.token);
  }

}
