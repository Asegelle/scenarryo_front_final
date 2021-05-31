import { Movie } from 'src/app/shared/models/movie/movie';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiMovieWebService {

  private urlAPIMovies: string;
  
  movie = Movie;
  

  constructor(private http: HttpClient) {
    this.urlAPIMovies='https://www.omdbapi.com/?apikey=50b53390&s=';
   
   }


  



  // fonction appelle à l'API si jamais on utilise le webservice et pas le components

  //  getMoviesByTitle(title : string): Observable<Movie[]> {

  //   console.log(this.urlAPIMovies + title + this.typeMovie);
  //   return this.http.get<Movie[]>(this.urlAPIMovies + title + this.typeMovie );
  // }





}
