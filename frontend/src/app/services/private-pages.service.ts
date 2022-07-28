import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PrivatePagesService {

  private api = environment.apiUrl

  constructor(private http: HttpClient) { }

  getTask() {
    return this.http.get<any>(this.api + '/private-tasks');
  }

  createEvent(event: any) {
    return this.http.post<any>(this.api + '/create-event', event);
  }

  payYappy(event: any){
    return this.http.post<any>(this.api + 'pagosbg', event);
  }

}
