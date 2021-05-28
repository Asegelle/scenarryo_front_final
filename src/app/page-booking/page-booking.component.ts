import { Component, OnInit } from '@angular/core';
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






  constructor(private scheduleWebService: ScheduleWebService, private movieWebService: MovieWebService, private roomWebService: RoomWebService) { }

  getSchedules(){
    this.scheduleWebService.getSchedules()
    .subscribe(data => {
      this.schedulesList = data;
    });
  }
  getMovies(){
    this.movieWebService.getMovies()
    .subscribe(data => {
      this.moviesList = data;
    });
  }
  getRooms(){
    this.roomWebService.getRooms()
    .subscribe(data => {
      this.roomsList = data;
    });
  }


  ngOnInit(): void {

    this.getSchedules();
    this.getMovies();
    this.getRooms();

  }




  onSubmitBooking(){

    
    this.submitted=true;
  }

}
