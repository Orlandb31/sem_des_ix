import { Component, OnInit } from '@angular/core';
import { ModalSwitchService } from '../../services/modal-switch.service'
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  user = {
    userName:"",
    password:"",
    email: "",
  }

  constructor( private modalSign: ModalSwitchService, private authService: AuthService, private router: Router ) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.modalSign.$modalSingup.emit(false)
  }

  signUp(){
    this.authService.signUpUser(this.user)
      .subscribe(
        res => { 
          console.log(res)
          localStorage.setItem('token', res.token);
          this.router.navigate(['/publishevent']);
        },
        err => { console.error("Error")}
      )
  }

}
