import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Movie } from 'src/app/shared/models/movie/movie';
import { MovieWebService } from 'src/app/shared/webservices/movie/movie.webservice';

@Component({
  selector: 'app-gestion-movies',
  templateUrl: './gestion-movies.component.html',
  styleUrls: ['./gestion-movies.component.scss']
})
export class GestionMoviesComponent implements OnInit {

  moviesList: Movie[] = [];
  title: string;
  moviesListApi: any[] = [];
  moviesListApiS:any[] = [];;
  typeMovie: string = '&Type=movie';
  movie: Movie = new Movie();
  valueAgeLimit: string[] = [];
  ageLimit = null;
  ageLimited = '';
  age = null;

  constructor(private movieWebService: MovieWebService, private http: HttpClient) { }


  
  ngOnInit(): void {

    this.movieWebService.getMovies()
      .subscribe(data => {
        this.moviesList = data;
      });

    // Instantiation des ages limites à afficher en BDD
    this.valueAgeLimit[0] = 'Tous public';
    this.valueAgeLimit[1] = 'Avertissement';
    this.valueAgeLimit[2] = 'Moins de 12 ans';
    this.valueAgeLimit[3] = 'Moins de 16 ans';
    this.valueAgeLimit[4] = 'Moins de 18 ans';

  }


  // Fonction supprimer un film en BDD

  handleClickDeleteMovie(deleteMovie: Movie): void {

    this.movieWebService.deleteMovieService(deleteMovie).subscribe(
      (data: Movie) => {
        data = deleteMovie;

        // refresh components after click
        this.ngOnInit();
      });

  }

  // Fonction recherche par titre sur l'API

  handleClickFindMovie(formFindMovie: NgForm) {
    // recherche la liste d film avec la recherche "s"
    let url = 'http://www.omdbapi.com/?apikey=efdc2275&s=' + this.title + this.typeMovie;

    this.http.get<any>(url).subscribe(
      (response) => {

        this.moviesListApi = response.Search;

        // On rapelle l'API pour une recherche T, plus grand Json
        for (let i = 0; i < this.moviesListApi.length; i++) {
          let url = 'http://www.omdbapi.com/?apikey=efdc2275&t=' + this.moviesListApi[i].Title;
          this.http.get<any>(url).subscribe(
            (data) => {
              this.moviesListApi[i] = data;
              
            });
        }
      });
  }
  
  // handleClickFindMovie(formFindMovie: NgForm) {

  //   this.movieWebService.getMovieFromApiList(this.title).subscribe(
  //     (data: any) => {
  //       this.moviesListApiS = data.Search;

  //       for (let i = 0; i < this.moviesListApiS.length; i++) {
  //         let titleApi: any = this.moviesListApiS[i].Title

  //         console.log('boucle for titre' + titleApi.Title[i]);

  //         this.movieWebService.getMovieFromApiJson(titleApi.Title[i]).subscribe(
  //           (data: any) => {
            
  //             console.log('  ' + this.moviesListApi[i].Title);
  //             this.moviesListApi[i] = data;
              

  //           });

  //       }
  //     });
  // }




  

  // fonction complementaire, récupère l'age limit pour ajout film dans base de donnée
  addAgeLimit(age: string) {
    this.movie.ageLimited = age;
    console.log('fonction ageLimit' + this.movie.ageLimited);

  }

  // Fonction ajout d'un film en base de donnée 

  handleClickAddMovie(movieApi: any): void {
   
    this.movie.id = 0;
    this.movie.title = movieApi.Title
    this.movie.producer = movieApi.Director;
    this.movie.releaseDate = movieApi.Released;
    this.movie.synopsis = movieApi.Plot;
    this.movie.duration = movieApi.Runtime;
    this.movie.poster = movieApi.Poster;

    this.movieWebService.addMovieService(this.movie).subscribe(
      (data: Movie) => {
        data = this.movie;

        // refresh components after click
        this.ngOnInit();
       

      });
  }

}



