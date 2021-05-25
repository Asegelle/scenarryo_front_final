import { Injectable } from '@angular/core';
import { Movie } from '../../models/movie/movie';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MovieWebService {
  
  private urlMovies: string;
  movie = Movie;
  

  constructor( private http: HttpClient) {
    this.urlMovies= 'http://localhost:8080/rest';
   }

  getMovies(): Observable<Movie[]> {
    
    console.log(this.http.get<Movie[]>(this.urlMovies ));

    return this.http.get<Movie[]>(this.urlMovies);
  }

  
}
