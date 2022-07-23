import { AuthService } from './services/auth.service';
import { AuthGuard } from './auth.guard';
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
    path: "",
    component: LandingComponent
  },
  {
    path: "eventinfo",
    component: EventInfoComponent
  },
  {
    path: "payrequest",
    component: BuyRequestComponent
  },
  {
    path: "payconfirm",
    component: BuyConfirmComponent
  },
  {
    path: "publishevent",
    component: PublisherEventComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "map",
    component: MapComponent
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }