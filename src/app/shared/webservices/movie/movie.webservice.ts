import { Injectable } from '@angular/core';
import { Movie } from '../../models/movie/movie';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class MovieWebService {

  urlSpringMovies: string;
  movie = Movie;
  sUrlAPIMovies: string;
  typeMovie: string = '&Type=movie';
  title: string;
  tUrlAPIMovies: string;
  newTitle: string;

  private urlMovies:string;


  constructor(private http: HttpClient) {
    this.urlSpringMovies = 'http://localhost:8080/admin/';
    // a mettre en api web service
    this.sUrlAPIMovies='https://www.omdbapi.com/?apikey=50b53390&s=';
    this.tUrlAPIMovies='https://www.omdbapi.com/?apikey=50b53390&t=';
  }



  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.urlSpringMovies + 'movie');
  }


  getMovieFromApiList(title : any): Observable<any> {

    return this.http.get<any>(this.sUrlAPIMovies + title + this.typeMovie);
  }


  getMovieById(id: number): Observable<Movie> {
    
    return this.http.get(`${this.urlMovies}/${id}`);
  }

  
  getMovieFromApiJson(newTitle : any): Observable<any> {
   console.log('web components title envoyé en api'+ newTitle.Title);
    return this.http.get<any>(this.tUrlAPIMovies + newTitle.Title);
  }



  deleteMovieService(deleteMovie: Movie): Observable<Movie> {
    return this.http.post<Movie>(this.urlSpringMovies + 'deletemovie', deleteMovie);
  }

  addMovieService(newMovie: Movie): Observable<Movie> {
    return this.http.post<Movie>(this.urlSpringMovies + 'addmovie', newMovie);

  }


 




}
