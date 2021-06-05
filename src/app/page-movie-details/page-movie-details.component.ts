import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { FilmShow } from '../shared/models/film-show';
import { Movie } from '../shared/models/movie/movie';
import { MovieComments } from '../shared/models/movieComments';
import { Schedule } from '../shared/models/schedule';
import { MovieWebService } from '../shared/webservices/movie/movie.webservice';

@Component({
  selector: 'app-page-movie-details',
  templateUrl: './page-movie-details.component.html',
  styleUrls: ['./page-movie-details.component.scss']
})
export class PageMovieDetailsComponent implements OnInit {



  movie: Movie = {
    title:"",
    producer:"",
    releaseDate:undefined,
    ageLimited:"",
    synopsis:"",
    duration:"",
    poster:"",
    filmComment:undefined
  };
  idMovie: number = 0;
  sub:any;
  commentsList: MovieComments[] = [];
  commentsListById: MovieComments[] = [];

  emptyComment: MovieComments = new MovieComments();
  submitted:boolean = false;
  arrayDates: Date[] = [];

  comment:MovieComments = {
    comment:""
  }

  moviesList: Movie[] = [];
  showes: FilmShow[] = [];
  schedules: Schedule[] = [];


  constructor(private activatedroute:ActivatedRoute, private movieWebService: MovieWebService, private router: Router) {
    this.activatedroute.queryParams.subscribe(
      params => {
        this.idMovie = Number(params.idMovie);
      })
   }

   getAllComments(){
    this.movieWebService.getAllComments()
    .subscribe(data => {
      this.commentsList = data;
      console.log(this.commentsList);
    });
  }


  
  getAllCommentsById(){
    this.movieWebService.getCommentsById(this.idMovie)
    .subscribe(data => {
      this.commentsListById = data;
      console.log(this.commentsListById);
    });
  }


  newComment(): void {
    this.comment = {
      comment:"",
      commentMovie:undefined
    };
  }










   ngOnInit(): void {
    // recuperer un seul movie 
    this.movieWebService.getMovieById(this.idMovie).subscribe(data => {
          this.movie = data;
        });

    this.getAllComments();
    this.getAllCommentsById();


    this.arrayDates.push(new Date());
    for (let i = 1 ;  i <= 6 ; i++) {
      this.arrayDates.push(new Date(new Date().setDate(new Date().getDate()+i)) );
      
    }

  }


  handleClickBooking(show : FilmShow, movie : Movie){
    let queryNavigation : NavigationExtras = {
      queryParams : {
        idShow : show.id,
        idMovie : movie.id
      }
    }
    if (show.bookedSeats!=undefined && show.showRoom?.seatsQuantity !=undefined
        && show.bookedSeats < show.showRoom?.seatsQuantity) {
      // this.filmShowService.updateFilmShow(show);
      this.router.navigate(['page-payment'],queryNavigation);
      
    } else {
      alert('aucune place n\'est disponible');
    }
      
  }
  onSubmit(form: NgForm) {
    console.log(form.value['title']);
  }





  onSubmitAddComment():void{
    this.emptyComment = {
      comment:this.comment.comment,
      commentMovie:this.movie
    };
    this.movieWebService.addComment(this.emptyComment)
    .subscribe(response => {
      console.log(response);
      this.submitted=true;
      this.getAllComments();
      this.getAllCommentsById();

      this.newComment();
      this.ngOnInit();
    },
    error => {
      console.log(error);
    });
  }

  isHidden:boolean = true;
  handleClickDisplaySchedule(){
    this.isHidden=!this.isHidden;
  }







}
