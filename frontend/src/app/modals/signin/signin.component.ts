import { Component, OnInit } from '@angular/core';
import { ModalSwitchService } from '../../services/modal-switch.service'
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  user = {
    userName:"",
    password:"",
    email: "",
  }

  constructor( private modalSign: ModalSwitchService, private authService: AuthService, private router: Router  ) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.modalSign.$modal.emit(false)
  }

  signIn(){
    this.authService.signInUser(this.user)
      .subscribe(
        res => { 
          console.log(res)
          localStorage.setItem('token', res.token);
          this.router.navigate(['/publishevent']);
        },
        err => { console.log("Error")}
      )
  }

}
