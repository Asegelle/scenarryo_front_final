import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../shared/models/movie/movie';
import { MovieComments } from '../shared/models/movieComments';
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
  emptyComment: MovieComments = new MovieComments();
  submitted:boolean = false;

  comment:MovieComments = {
    comment:""
  }




  constructor(private activatedroute:ActivatedRoute, private movieWebService: MovieWebService) {
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


  newComment(): void {
    this.comment = {
      comment:""
    };
  }










   ngOnInit(): void {
    // recuperer un seul movie 
    this.movieWebService.getMovieById(this.idMovie).subscribe(data => {
          this.movie = data;
        });

    this.getAllComments();

  }






  onSubmitAddComment():void{
    this.emptyComment = {
      comment:this.comment.comment,
      commentMovie:this.comment.commentMovie
    };
    this.movieWebService.addComment(this.emptyComment)
    .subscribe(response => {
      console.log(response);
      this.submitted=true;
      this.getAllComments();
      this.newComment();
    },
    error => {
      console.log(error);
    });
  }


  handleClickDisplaySchedule(){

  }







}
