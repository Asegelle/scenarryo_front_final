import { Movie } from 'src/app/shared/models/movie/movie';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiMovieWebService {

  // private urlAPIMovies: string;
  private urlSpringMovies: string;
  movie = Movie;
  

  constructor(private http: HttpClient) {
    // this.urlAPIMovies='https://www.omdbapi.com/?apikey=50b53390&s=';
    this.urlSpringMovies= 'http://localhost:8080/admin/movie';
   }

   addMovies(newMovie : Movie): Observable<Movie>  {


    console.log('newMovie' , newMovie)
    
    // return this.http.post<Movie>(this.urlSpringMovies, newMovie).pipe(map(function(movieAdd : Movie):Movie{

    return  this.http.post<Movie>(this.urlSpringMovies, newMovie);
    // }));
  }

  //  getMoviesByTitle(title : string): Observable<Movie[]> {

  //   console.log(this.urlAPIMovies + title + this.typeMovie);
  //   return this.http.get<Movie[]>(this.urlAPIMovies + title + this.typeMovie );
  // }





}
