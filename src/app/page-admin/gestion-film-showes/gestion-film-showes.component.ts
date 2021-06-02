import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FilmShow } from 'src/app/shared/models/film-show';
import { Movie } from 'src/app/shared/models/movie/movie';
import { Room } from 'src/app/shared/models/room';
import { Schedule } from 'src/app/shared/models/schedule';
import { FilmShowWebService } from 'src/app/shared/webservices/film-show/film-show.webservices';
import { MovieWebService } from 'src/app/shared/webservices/movie/movie.webservice';
import { RoomWebService } from 'src/app/shared/webservices/room/room.webservice';
import { ScheduleWebService } from 'src/app/shared/webservices/schedule/schedule.webservices';

@Component({
  selector: 'app-gestion-film-showes',
  templateUrl: './gestion-film-showes.component.html',
  styleUrls: ['./gestion-film-showes.component.scss']
})
export class GestionFilmShowesComponent implements OnInit {

  filmShowesList: FilmShow[] = [];
  movieList : Movie[] = [];
  roomList : Room[] = [];
  scheduleList : Schedule[] = [];
  movie: Movie;
  room :Room;
  schedule : Schedule;

  constructor( private filmShowWebService: FilmShowWebService,
				private movieWebService : MovieWebService,
				private roomWebService : RoomWebService,			
				private ScheduleWebService : ScheduleWebService			
	) { }

  ngOnInit(): void {
    this.reloadData();
  }

  // a voir si cet fonctionnel 
  onSubmit(form: NgForm) {
    console.log(form.value['title']);
    
  }

  handleClickAddShow(form : NgForm){
    let show : FilmShow = form.value ;
	
	// mettre le test si available
	if(this.isAvailableRoom(show)){
		this.filmShowWebService.addFilmShow(show).subscribe(
      data => {
        console.log('bien enregister ');
		this.reloadData();
    });
	form.reset();
	}else{
		alert('la salle est déjà réservée à cet horaire, merci de choisir une autre salle et/ou un autre horaire');
	}
    

  }

  handleClickDeleteFilmShow(show : FilmShow){
	 //  si un film contien deja des place ne supprime pas 
	if(show.bookedSeats === 0){
		this.filmShowWebService.deleteFilmShow(show.id)
		.subscribe( data => {
			this.reloadData();
			});
	}else{
		alert('cette séance est déjà reservée ' + show.bookedSeats + 'fois,  suppresion annulée');
	}
	 
  }
  

  onDestroy() {

  }
  isAvailableRoom(show :FilmShow):boolean{
	let isAvailbale : boolean = true;
	this.filmShowesList.forEach(
		item => {
			if(show.showRoom.id == item.showRoom.id &&
				show.showSchedule.id == item.showSchedule.id){
					isAvailbale = false;
			}
		}
	);
	return isAvailbale;
  }
  reloadData(){
    this.filmShowWebService.getFilmShowes()
      .subscribe(data => {
        this.filmShowesList = data;
        //console.log(this.filmShowesList);
    }, err =>{
		console.log('erreur de recuperation des filmShows');
	});
    // recuperer tous les films 
    this.movieWebService.getMovies()
		.subscribe( data => {
			this.movieList = data ;
	}, err =>{
		console.log('erreur de recuperation des movies');
	});
	// recuperer les salles 
	this.roomWebService.getRooms()
		.subscribe( data => {
		this.roomList = data ;
	}, err =>{
		console.log('erreur de recuperation des rooms');
	});
	// recuperer les horaires 
	this.ScheduleWebService.getSchedules()
		.subscribe( data => {
		this.scheduleList = data ;
	}, err =>{
		console.log('erreur de recuperation des rooms');
	});
  }


}