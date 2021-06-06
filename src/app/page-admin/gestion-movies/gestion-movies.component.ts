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
  isButtonVisibleAddMovieApi:boolean = false; // valeur True laisse afficher
  isButtonVisibleAddMovieForm:boolean = false; //valeur false rends invisble
  moviesListCaroussel: Movie[] = [];
  isButtonVisibleDetailMovieApi:boolean = false; //valeur false rends invisble
  isButtonVisibleHideButtonDetail:boolean = false; //valeur false rends invisble
  isButtonVisibleShowButtonDetail:boolean = true;


  constructor(private movieWebService: MovieWebService, private http: HttpClient) { }


  
  ngOnInit(): void {

    this.movieWebService.getMovies()
      .subscribe(data => {
        this.moviesList = data;
      });

      this.getAllMovieFroCaroussel();

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
      (dataDelete: Movie) => {
        dataDelete = deleteMovie;
        
        // refresh components after click
        this.ngOnInit();
      });

  }

    // For Caroussel
    getAllMovieFroCaroussel() {

      this.movieWebService.GetMovieForCaroussel()
        .subscribe(data => {
          this.moviesListCaroussel = data;
          console.log('G Unit' + data);
        });
    }
// Fonction ajouter un film dans le caroussel

  handleClickAddMovieCaroussel(addMovieCaroussel: Movie) :void {
    this.movieWebService.addMovieCarousselService(addMovieCaroussel).subscribe(
      (dataAdd: Movie) => {
        dataAdd = addMovieCaroussel;
        // refresh components after click
        this.ngOnInit();
        // cacher le bouton avec une boolean si appuyer
      });
  }

  // Fonction supprimer un film dans le caroussel
  handleClickDeleteMovieCaroussel(deleteMovieCaroussel: Movie):void {
   
    this.movieWebService.deleteMovieCarousselService(deleteMovieCaroussel).subscribe(
      (dataDelete: Movie) => {
        dataDelete = deleteMovieCaroussel;
        
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
  addAgeLimit(ageLimit: any) {
    
    this.movie.ageLimited = ageLimit;
    console.log('ageLimit ' + this.movie.ageLimited);

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
      (dataAddMovie: Movie) => {
        dataAddMovie = this.movie;

        // refresh components after click
        this.ngOnInit();
       

      });
  }


handleClickAddMovieByForm(addMovieForm: NgForm){

  this.movie.title = addMovieForm.value['title'];
  this.movie.producer = addMovieForm.value['producer'];
  this.movie.releaseDate = addMovieForm.value['releaseDate'];
  this.movie.synopsis = addMovieForm.value['synopsis'];
  this.movie.duration = addMovieForm.value['duration'];
  this.movie.poster = addMovieForm.value['poster'];

  this.movieWebService.addMovieService(this.movie).subscribe(
    (data: Movie) => {
      data = this.movie;

      // refresh components after click
      this.ngOnInit();
     

    });
}



}
