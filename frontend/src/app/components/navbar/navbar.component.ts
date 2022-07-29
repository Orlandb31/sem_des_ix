import { Component, OnInit } from '@angular/core';
import { ModalSwitchService } from '../../services/modal-switch.service'
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  modalSignin: boolean;
  modalSignup: boolean;

  constructor(
    private modalSign: ModalSwitchService,
    private router: Router, 
    public authService: AuthService
  ) {
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
