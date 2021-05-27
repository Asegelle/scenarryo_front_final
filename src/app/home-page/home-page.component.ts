import { Component, OnInit } from '@angular/core';
import { MovieWebService } from '../shared/webservices/movie/movie.webservice';
import { Movie } from '../shared/models/movie/movie';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {


  moviesList: Movie[] = [];

  constructor( private movieWebService: MovieWebService) {

  }

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
