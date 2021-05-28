import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApiMovieWebService } from './../../shared/webservices/api-movie/apiMovie.webservice';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Movie } from 'src/app/shared/models/movie/movie';
import { APIMovie } from 'src/app/shared/models/movie/movieAPI';
import { MovieWebService } from 'src/app/shared/webservices/movie/movie.webservice';

@Component({
  selector: 'app-gestion-movies',
  templateUrl: './gestion-movies.component.html',
  styleUrls: ['./gestion-movies.component.scss']
})
export class GestionMoviesComponent implements OnInit {

  moviesList: Movie[] = [];
  title: string;
  moviesListApi: any[];
  typeMovie :string= '&Type=movie';
  movie : Movie;
  jsonApi : any = {
    id : '0',
    'title' : '',
    'producer' : '',
    'releaseDate' : '',
    'ageLimited' : '',
  }

  constructor( private movieWebService: MovieWebService , private apiMovieWebService: ApiMovieWebService, private http: HttpClient) { }

  ngOnInit(): void {

    this.movieWebService.getMovies()
      .subscribe(data => {
        this.moviesList = data;
      });

  
  }


  // Fonction ajout d'un film en base de donnée  
  handleClickAddMovie(movieApi : any): void{
        
    console.log(movieApi, 'fdjgkhsdfxjgbjd');

  

        console.log(movieApi.Title+ 'ta mère')
        this.movie.title = movieApi.Title;

         console.log( this.movie.title + 'ton père')
      }
  


  //    addmovietest(movieApi : any): void{
        
  //   console.log(movieApi, 'fdjgkhsdfxjgbjd');

    

  //   this.movieWebService.addMovies(movieApi).subscribe(
  //      (data :Movie) => {
         
        
  //        data.title = movieApi.Title;

         
  //     }

  //   );
  // }



// Fonction recherche par titre sur l'API
    handleClickFindMovie(formFindMovie: NgForm) {
      let url = 'http://www.omdbapi.com/?apikey=efdc2275&s=' + this.title + this.typeMovie;
      console.log(url);
      // this.title = ''; // vider le champ input
      this.http.get<any>(url).subscribe(
        (response) => {
  
          this.moviesListApi = response.Search;
        }
      )
    }
// recherche de films par titre

  // handleClickFindMovie(formFindMovie: NgForm) {

    // this.apiMovieWebService.getMoviesByTitle(this.title).subscribe(       
    //     (response) => {
    //       this.moviesListApi = response ;
    //       console.log(this.moviesListApi, 'oooook')
    //     }
    // );
  

  onDestroy() {

  }



}
