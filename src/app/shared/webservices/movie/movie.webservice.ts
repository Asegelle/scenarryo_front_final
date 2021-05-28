import { Injectable } from '@angular/core';
import { Movie } from '../../models/movie/movie';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class MovieWebService {
  
  private urlSpringMovies: string;
  movie = Movie;
 

  constructor( private http: HttpClient) {
    this.urlSpringMovies= 'http://localhost:8080/admin/movie';
    
   }



  getMovies(): Observable<Movie[]> {

    return this.http.get<Movie[]>(this.urlSpringMovies);
  }




  addMovies(newMovie : Movie): Observable<Movie>  {
    
    console.log('sdfdsgd' + newMovie);
    return this.http.post<Movie>(this.urlSpringMovies, newMovie);
  }


 
  
}
