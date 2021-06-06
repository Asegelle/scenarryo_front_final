import { Injectable } from '@angular/core';
import { Movie } from '../../models/movie/movie';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MovieComments } from '../../models/movieComments';



@Injectable({
  providedIn: 'root'
})
export class MovieWebService {

  urlSpringMovies: string;
  movies:Movie = new Movie;
  sUrlAPIMovies: string;
  typeMovie: string = '&Type=movie';
  title?: string;
  tUrlAPIMovies: string;
  newTitle?: string;

  private urlMovies:string = 'http://localhost:8080/admin/rest' ;


  constructor(private http: HttpClient) {
    this.urlSpringMovies = 'http://localhost:8080/admin/';
    // a mettre en api web service
    this.sUrlAPIMovies='https://www.omdbapi.com/?apikey=50b53390&s='; // give back a Json List with only 5 info 
    this.tUrlAPIMovies='https://www.omdbapi.com/?apikey=50b53390&t='; // give back a unique Json with more informations
  }

//---------------------------------------------------------------------------

  // ------------------------- getAllComments --------------------------

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
  ///////////////////////////////// Caroussel ///////////////////////////////////////////////////

  GetMovieForCaroussel(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.urlSpringMovies + 'moviecaroussel');
  }

  addMovieCarousselService(addMovieCaroussel: Movie): Observable<Movie> {
    return this.http.post<Movie>(this.urlSpringMovies + 'addmoviecaroussel', addMovieCaroussel);
  }

  deleteMovieCarousselService(deleteMovieCaroussel: Movie): Observable<Movie> {    
    return this.http.post<Movie>(this.urlSpringMovies + 'deletemoviecaroussel', deleteMovieCaroussel);
  }

  
  // //recup des 6 dernieres affiche
  // getMoviesBanniere(): Observable<Movie[]> {
  //   return this.http.get<Movie[]>(this.urlSpringMovies + 'movie');
  // }


  //---------------------------------------------------------------------------

  // ------------------------- getAllComments --------------------------


  getCommentsById(id:number): Observable<MovieComments[]>{
    console.log(this.http.get<MovieComments[]>(`${this.urlMovies}/comments/movie/${id}`));
    return this.http.get<MovieComments[]>(`${this.urlMovies}/comments/movie/${id}`); 
  }

  /**
   * function getAllComments :
   * @returns this.http.get<MovieComments[]>(`${this.urlMovies}/comments`);
   */
  getAllComments(): Observable<MovieComments[]> {
    return this.http.get<MovieComments[]>(`${this.urlMovies}/comments`);
  }

  // ------------------------- addComment --------------------------
  /**
   * function addComment :
   * @param newComment 
   * @returns this.http.post<MovieComments>(`${this.urlMovies}/comments`, newComment);
   */
  addComment(newComment: MovieComments): Observable<MovieComments> {
    return this.http.post<MovieComments>(`${this.urlMovies}/comments`, newComment);

  }
  

}
