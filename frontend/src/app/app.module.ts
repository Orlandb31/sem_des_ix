import { TokenInterceptorService } from './services/token-interceptor.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './modals/signin/signin.component';
import { SignupComponent } from './modals/signup/signup.component';
import { PublisherEventComponent } from './pages/publisher-event/publisher-event.component';
import { LandingComponent } from './pages/landing/landing.component';
import { EventInfoComponent } from './pages/event-info/event-info.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BuyRequestComponent } from './pages/buy-request/buy-request.component';
import { BuyConfirmComponent } from './pages/buy-confirm/buy-confirm.component';
import { AuthGuard } from './auth.guard';
import { MapComponent } from './pages/map/map.component';
import { EventupdateComponent } from './eventupdate/eventupdate.component';
import { MyeventsComponent } from './myevents/myevents.component';
import { EventreserveComponent } from './eventreserve/eventreserve.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    PublisherEventComponent,
    LandingComponent,
    EventInfoComponent,
    NavbarComponent,
    FooterComponent,
    BuyRequestComponent,
    BuyConfirmComponent,
    MapComponent,
    EventupdateComponent,
    MyeventsComponent,
    EventreserveComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
