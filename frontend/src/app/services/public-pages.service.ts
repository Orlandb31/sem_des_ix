import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PublicPagesService {

  private api = environment.apiUrl

  constructor(private http: HttpClient, private router: Router) { }

  getEvents() {
  return this.http.get(this.api + '/events');
  }

  getEvent(id: any) {
    return this.http.get(this.api + '/event/' + id);
  }

  getEventCategory(id: any) {
    return this.http.get(this.api + '/events-category/' + id);
  }
}
