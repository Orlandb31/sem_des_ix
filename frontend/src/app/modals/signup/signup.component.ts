import { Component, OnInit } from '@angular/core';
import { ModalSwitchService } from '../../services/modal-switch.service'


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor( private modalSign: ModalSwitchService ) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.modalSign.$modalSingup.emit(false)
  }

}
