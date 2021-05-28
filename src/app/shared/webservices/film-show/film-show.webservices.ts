import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FilmShow } from '../../models/film-show';


@Injectable({
  providedIn: 'root'
})
export class FilmShowWebService {
  
  private urlFilmShowes: string;
  

  constructor( private http: HttpClient) {
    this.urlFilmShowes= 'http://localhost:8080/admin/film-show/';
   }

  getFilmShowes(): Observable<FilmShow[]> {
    
    console.log(this.http.get<FilmShow[]>(this.urlFilmShowes ));

    return this.http.get<FilmShow[]>(this.urlFilmShowes+'getAll');
  }

  
}
