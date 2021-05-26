import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Movie } from '../shared/models/movie/movie';
import { MovieWebService } from '../shared/webservices/movie/movie.webservice';

@Component({
  selector: 'app-page-on-display',
  templateUrl: './page-on-display.component.html',
  styleUrls: ['./page-on-display.component.scss']
})
export class PageOnDisplayComponent implements OnInit {

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
