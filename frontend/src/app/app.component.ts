import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'eventgo-frontend';

  constructor(){}
  ngOnInit() {
    
  }

  opneSignin(){
    console.log("funcionando")
  }

}
