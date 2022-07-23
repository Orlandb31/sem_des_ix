import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private api = environment.apiUrl

  constructor(private http: HttpClient, private router: Router) { }

  signUpUser(user: any) {
    return this.http.post<any>(this.api + '/signup', user);
  }

<<<<<<< HEAD
  loggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token')
  }

  logout() {
    localStorage.removeItem('token')
    this.router.navigate([''])
  }  
=======
  signInUser(user: any) {
    return this.http.post<any>(this.api + '/signin', user);
  }
>>>>>>> 1c88ac312f45bdd4dea1b89dd102ccede138a264
}
