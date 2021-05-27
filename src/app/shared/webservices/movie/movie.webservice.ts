import { GestionMoviesComponent } from './../../../page-admin/gestion-movies/gestion-movies.component';
import { Injectable } from '@angular/core';
import { Movie } from '../../models/movie/movie';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class MovieWebService {
  
  private urlSpringMovies: string;
  private urlAPIMovies: string;
  movie = Movie;
 

  constructor( private http: HttpClient , private moviesComponent: GestionMoviesComponent) {
    this.urlSpringMovies= 'http://localhost:8080/admin/movie';
    this.urlAPIMovies='https://www.omdbapi.com/?apikey=50b53390&t=';
   }



  getMovies(): Observable<Movie[]> {
    
    console.log(this.http.get<Movie[]>(this.urlSpringMovies ));

    return this.http.get<Movie[]>(this.urlSpringMovies);
  }




  addMovies(newMovie : Movie): Observable<Movie>  {
    
    return this.http.post<Movie>(this.urlSpringMovies, newMovie);
  }


  getMoviesByTitle(title : string): Observable<Movie[]> {
    console.log(this.urlAPIMovies + this.moviesComponent.title);
    console.log(this.moviesComponent.title);
    title = this.moviesComponent.title

    return this.http.get<Movie[]>(this.urlAPIMovies + title);
  }
  
}
