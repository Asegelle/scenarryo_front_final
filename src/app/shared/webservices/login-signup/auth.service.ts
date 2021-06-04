import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

  // url to reach login methods in back-end
const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // --------------------------------------------------------------------------------
  // Constructor
  constructor(private http: HttpClient) { }


  // --------------------------------------------------------------------------------
  // Methods

  // ------------------------- login --------------------------
  /**
   * function login :
   * @param username 
   * @param password 
   * @returns this.http.post(AUTH_API + 'signin', {
      username,
      password
    }, httpOptions);
   */
  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username,
      password
    }, httpOptions);
  }

  // ------------------------- register --------------------------
  /**
   * function register :
   * @param username 
   * @param email 
   * @param password 
   * @returns this.http.post(AUTH_API + 'signup', {
      username,
      email,
      password
    }, httpOptions);
   */
  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username,
      email,
      password
    }, httpOptions);
  }


}