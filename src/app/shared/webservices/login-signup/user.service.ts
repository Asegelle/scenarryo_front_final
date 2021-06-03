import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const API_URL = 'http://localhost:8080/api/test/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // --------------------------------------------------------------------------------
  // Constructor
  constructor(private http: HttpClient) { }


  // --------------------------------------------------------------------------------
  // Methods

  // ------------------------- getPublicContent --------------------------
  /**
   * function getPublicContent :
   * @returns this.http.get(API_URL + 'all', { responseType: 'text' });
   */
  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  // ------------------------- getUserBoard --------------------------
  /**
   * function getUserBoard :
   * @returns this.http.get(API_URL + 'user', { responseType: 'text' });
   */
  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  // ------------------------- getModeratorBoard --------------------------
  /**
   * function getModeratorBoard :
   * @returns this.http.get(API_URL + 'mod', { responseType: 'text' });
   */
  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  // ------------------------- getAdminBoard --------------------------
  /**
   * function getAdminBoard :
   * @returns this.http.get(API_URL + 'admin', { responseType: 'text' });
   */
  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }
}