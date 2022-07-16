import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './modals/signin/signin.component';
import { SignupComponent } from './modals/signup/signup.component';
import { PublisherEventComponent } from './pages/publisher-event/publisher-event.component';
import { LandingComponent } from './pages/landing/landing.component';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    PublisherEventComponent,
    LandingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
