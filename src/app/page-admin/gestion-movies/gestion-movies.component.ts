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


  constructor( private movieWebService: MovieWebService) { }

  ngOnInit(): void {

    this.movieWebService.getMovies()
      .subscribe(data => {
        this.moviesList = data;
      });
  }

  onSubmit(form: NgForm) {
    console.log(form.value['title']);
    
  }

  onDestroy() {

  }



}
