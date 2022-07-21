import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { EventInfoComponent } from './pages/event-info/event-info.component';
import { BuyRequestComponent } from './pages/buy-request/buy-request.component';
import { BuyConfirmComponent } from './pages/buy-confirm/buy-confirm.component';
import { PublisherEventComponent } from './pages/publisher-event/publisher-event.component';
import { MapComponent } from './pages/map/map.component';

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
    path: "holis",
    component: BuyConfirmComponent
  },
  {
    path: "holid",
    component: PublisherEventComponent
  },
  {
    path: "",
    component: MapComponent
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }