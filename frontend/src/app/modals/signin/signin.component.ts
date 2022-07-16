import { Component, OnInit } from '@angular/core';
import { ModalSwitchService } from '../../services/modal-switch.service'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor( private modalSign: ModalSwitchService ) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.modalSign.$modal.emit(false)
  }

}
