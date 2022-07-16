import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublisherEventComponent } from './pages/publisher-event/publisher-event.component'; 

const routes: Routes = [
  {
    path: 'publisherevent',
    component: PublisherEventComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
