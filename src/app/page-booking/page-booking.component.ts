import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { FilmShow } from '../shared/models/film-show';
import { Movie } from '../shared/models/movie/movie';
import { Room } from '../shared/models/room';
import { Schedule } from '../shared/models/schedule';
import { MovieWebService } from '../shared/webservices/movie/movie.webservice';
import { RoomWebService } from '../shared/webservices/room/room.webservice';
import { ScheduleWebService } from '../shared/webservices/schedule/schedule.webservices';

@Component({
  selector: 'app-page-booking',
  templateUrl: './page-booking.component.html',
  styleUrls: ['./page-booking.component.scss']
})
export class PageBookingComponent implements OnInit {

  roomsList: Room[] = [];
  moviesList: Movie[] = [];
  schedulesList: Schedule[] = [];

  emptySchedule: Schedule = new Schedule();
  emptyRoom: Room = new Room();
  emptyMovie: Movie = new Movie();

  submitted:boolean = false;
  message:string = "";

  schedule: Schedule = {
    showDate:undefined,
    startingHour:"",
    endingHour:""
  };

  room: Room = {
    roomNumber:undefined,
    seatsQuantity:undefined
  };

  movie: Movie = {
    title:"",
    producer:"",
    releaseDate:undefined,
    ageLimited:"",
    synopsis:"",
    duration:"",
    poster:""
  };
  show: FilmShow ={
    id:undefined,
    priceTicket:undefined,
    bookedSeats:undefined,
    showRoom:this.room,
    showSchedule:this.schedule,
    showMovie:this.movie
  }






  constructor(private scheduleWebService: ScheduleWebService, 
              private movieWebService: MovieWebService, 
              private roomWebService: RoomWebService,
              private router : Router) { }

  getSchedules(){
    this.scheduleWebService.getSchedules()
    .subscribe(data => {
     // this.schedulesList = data;
    });
  }
  getRooms(){
    this.roomWebService.getRooms()
    .subscribe(data => {
      this.roomsList = data;
    });
  }
  
  getMovies(){
    this.movieWebService.getMovies()
    .subscribe(data => {
      this.moviesList = data;
    });
  }

  ngOnInit(): void {

    this.getMovies();
    // this.getSchedules();
    // this.getRooms();

  }
// ici je declare la variable qui va contenir au fur est a mesure mon movie 
selectedMovie : Movie;
selectedShow : FilmShow;
filmShowes : FilmShow[];
onChangeSelectedMovie(movie : Movie){
  this.selectedMovie = movie;
  this.schedulesList =[];
  console.log(movie);
  this.filmShowes = movie.filmShow ;
  movie.filmShow.forEach(show => {
        this.schedulesList.push(show.showSchedule);
    });
}
onChangeSelectedSchedule(show){
  console.log(show);
  this.selectedShow = show;
}

handleClickBooking(){
  let queryNavigation : NavigationExtras = {
    queryParams : {
      idShow : this.selectedShow.id,
      idMovie : this.selectedMovie.id
    }
  }
  if (this.selectedShow.bookedSeats !=undefined 
      && this.selectedShow.showRoom?.seatsQuantity !=undefined
      && this.selectedShow.bookedSeats < this.selectedShow.showRoom?.seatsQuantity) {
    // this.filmShowService.updateFilmShow(show);
    this.router.navigate(['page-payment'],queryNavigation);
    
  } else {
    alert('aucune place n\'est disponible');
  }

}


  onSubmitBooking(){

    
    this.submitted=true;
  }

}
