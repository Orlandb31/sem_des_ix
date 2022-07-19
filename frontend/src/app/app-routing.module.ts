import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { PublisherEventComponent } from './pages/publisher-event/publisher-event.component';

const routes: Routes = [
  {
    path: "a",
    component: LandingComponent
  },
  {
    path: "",
    component: PublisherEventComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }