import { Component, OnInit } from '@angular/core';
import { MovieWebService } from '../shared/webservices/movie/movie.webservice';
import { Movie } from '../shared/models/movie/movie';
import { NgForm } from '@angular/forms';
import { UserService } from '../shared/webservices/login-signup/user.service';
import { NavigationExtras, Router } from '@angular/router';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  content?: string;
  moviesList: Movie[] = [];

  constructor(private movieWebService: MovieWebService,private userService: UserService,  private router: Router) {

  }

  ngOnInit(): void {
    
    this.movieWebService.getMovies()
      .subscribe(data => {
        this.moviesList = data;
    });


    this.userService.getPublicContent().subscribe(
      data => {
        this.content = data;
        
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }
  
  


  handleClickDetailsMovie(movie:Movie){
    let queryNavigation : NavigationExtras = {
      queryParams : {
        idMovie : movie.id
      }
    }
    console.log("movie.id",movie.id);
    this.router.navigate(['/page-movie-details'],queryNavigation);


}
  

  onDestroy() {
  }

  
}
