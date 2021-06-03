import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FilmShow } from '../../models/film-show';


@Injectable({
  providedIn: 'root'
})
export class FilmShowWebService {
  
  private filmShowUrl = 'http://localhost:8080/admin/film-show';
  
  
  constructor( private http: HttpClient) { }
  
  getFilmShowes(): Observable<FilmShow[]> {
    return this.http.get<FilmShow[]>(`${this.filmShowUrl}/getAll`);
  }
  
  addFilmShow(show: FilmShow):Observable<FilmShow> {
    return this.http.put<FilmShow>(`${this.filmShowUrl}/add-filmshow`,show);
  }
  
  deleteFilmShow(id: number):Observable<FilmShow> {
    return this.http.delete<FilmShow>(`${this.filmShowUrl}/delete-filmshow/`+id)
  }
  
  
  // bookASeat(showOfThisMovie: FilmShow) :Observable<FilmShow>{
  //   return this.http.put<FilmShow>(`${this.filmShowUrl}/book-seat`,showOfThisMovie);
  // }
  
  // updateFilmShow(show: FilmShow) {
  //   return this.http.put<FilmShow>(`${this.filmShowUrl}/book-seat`,show);
  // }
}
