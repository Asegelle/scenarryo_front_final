import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmShow } from '../shared/models/film-show';
import { Movie } from '../shared/models/movie/movie';
import { Schedule } from '../shared/models/schedule';
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
  constructor( private movieWebService: MovieWebService,
               private filmShowService : FilmShowWebService,
               private scheduleService : ScheduleWebService,
               private route : ActivatedRoute) {
              this.route.queryParams.subscribe(
                params => {
                  this.idShow = Number(params.idShow);
                  this.idMovie = Number(params.idMovie);
                  
                }
              )
              }

  ngOnInit(): void {
    // recuperer un seul movie 
    this.movieWebService.getMovieById(this.idMovie).subscribe(data => {
          this.movieSelected = data;
          this.movieSelected.filmShow.forEach(show => {
            if(show.id === this.idShow) this.showSelected = show;
          })
        });

    
  }

  handleClickPayment(){
    console.log(' test dans sub2');
          console.log(this.movieSelected);
          console.log(this.showSelected);

      this.filmShowService.bookASeat(this.showSelected)
      .subscribe(
        data => {
          alert('Vous etes sur de vouloir continuer le paiement'+ JSON.stringify(data));
        }
      );
    // TODO ------------faire redirection ou generation du PDF 
  }

  

}
