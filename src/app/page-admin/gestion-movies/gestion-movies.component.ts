import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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


  constructor( private movieWebService: MovieWebService) { }

  ngOnInit(): void {

    this.movieWebService.getMovies()
      .subscribe(data => {
        this.moviesList = data;
      });
  }


  // Fonction ajout d'un film en base de donnée  
  onSubmit(formAddMovie: NgForm) {
    console.log(formAddMovie.value);
    
    this.movieWebService.addMovies(formAddMovie.value).subscribe(
      data => {
        console.log(data);
      }
    );
  }

    // recherche de films par titre

  handleClickFindMovie(formFindMovie: NgForm) {
    console.log(formFindMovie.value['title']);
    // this.title = formFindMovie.value['title'];
    console.log('ta mère' + this.title);
    
    this.movieWebService.getMoviesByTitle(formFindMovie.value['title']).subscribe(
      data => {
        console.log(data);
      }
    );
  }




  onDestroy() {

  }



}
