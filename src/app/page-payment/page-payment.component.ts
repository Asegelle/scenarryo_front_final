import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { BookedSeats } from '../shared/models/booked-seats';
import { FilmShow } from '../shared/models/film-show';
import { Movie } from '../shared/models/movie/movie';
import { Room } from '../shared/models/room';
import { Schedule } from '../shared/models/schedule';
import { BookedSeatsService } from '../shared/webservices/booked-seats/booked-seats.service';
import { FilmShowWebService } from '../shared/webservices/film-show/film-show.webservices';
import { MovieWebService } from '../shared/webservices/movie/movie.webservice';
import { ScheduleWebService } from '../shared/webservices/schedule/schedule.webservices';

@Component({
  selector: 'app-page-payment',
  templateUrl: './page-payment.component.html',
  styleUrls: ['./page-payment.component.scss']
})
export class PagePaymentComponent implements OnInit {
  idShow : number;
  idMovie : number;
  
  movieSelected: Movie;
  showSelected: FilmShow;
  roomSelected : Room;
  bookedSeats : BookedSeats[];
  constructor( private movieWebService: MovieWebService,
               private filmShowService : FilmShowWebService,
               private scheduleService : ScheduleWebService,
               private bookedSeatsService : BookedSeatsService,
               private route : ActivatedRoute,
               private router : Router) {

              this.route.queryParams.subscribe(
                params => {
                  this.idShow = Number(params.idShow);
                  this.idMovie = Number(params.idMovie);
                  
                }
              )
            }

  ngOnInit(): void {
    this.reloadData();
    // TODO ici undefined : source je ne recupere rien du Back pble en Back 
    // console.log(this.bookedSeats);

    
  }

  handleClickPayment(form : NgForm){

    // partie creation du bookedSeats et insersion en BDD
    let bookedSeat : BookedSeats = new BookedSeats(0,form.value['placeBookedRow'],form.value['placeBookedColumn'],this.showSelected);
    form.reset();
    this.bookedSeatsService.bookASeat(bookedSeat)
    .subscribe(
      data => {
        alert('En attente de confirmation de votre Banque');
        // ici voir si utile -------------------------------------------------------------------
        this.reloadData();
        window.location.reload();

      }
    );
    // TODO ------------faire redirection ou generation du PDF 
  }

  



  // --------------------------------------------- table seats 
  handleClickCheckSeatAvailable(i : number,j : number) : boolean{
    let isAvailable : boolean = true;
    if (this.bookedSeats){
      this.bookedSeats.forEach( seat => {
        if(seat.placeBookedRow === i && seat.placeBookedColumn === j){
        // si il existe dans la bdd alors il est pris et je peux pas le reservé 
          isAvailable = false ;}
      });

    }
    return isAvailable;

  }
  handleClickTermsOfUse(){
    // envoyer les informations a terms of use 
    console.log(this.movieSelected);
    let queryNavigation : NavigationExtras = {
    queryParams : {
      idShow : this.showSelected.id,
      idMovie : this.movieSelected.id
    }
  }
  this.router.navigate(['terms-of-use'],queryNavigation);
  }


  reloadData(){
    // recuperer un seul movie 
    this.movieWebService.getMovieById(this.idMovie).subscribe(data => {
      this.movieSelected = data;
      this.movieSelected.filmShow.forEach(show => {
        if(show.id === this.idShow) {
          this.showSelected = show;
          this.roomSelected = show.showRoom;
          // retourner les places reservées pour cette séance 
          this.bookedSeatsService.getBookedSeatsByShow(this.showSelected)
          .subscribe( data => {
            this.bookedSeats = data;
          });
        }
      })
    });
  }
  

}
