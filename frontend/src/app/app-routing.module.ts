import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { EventInfoComponent } from './pages/event-info/event-info.component';
import { BuyRequestComponent } from './pages/buy-request/buy-request.component';
import { BuyConfirmComponent } from './pages/buy-confirm/buy-confirm.component';

const routes: Routes = [
  {
    path: "hola",
    component: LandingComponent
  },
  {
    path: "holis",
    component: EventInfoComponent
  },
  {
    path: "holis2",
    component: BuyRequestComponent
  },
  {
    path: "",
    component: BuyConfirmComponent
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }