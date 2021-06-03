import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { FilmShow } from '../shared/models/film-show';
import { Movie } from '../shared/models/movie/movie';
import { Schedule } from '../shared/models/schedule';
import { FilmShowWebService } from '../shared/webservices/film-show/film-show.webservices';
import { MovieWebService } from '../shared/webservices/movie/movie.webservice';
import { ScheduleWebService } from '../shared/webservices/schedule/schedule.webservices';

@Component({
  selector: 'app-page-on-display',
  templateUrl: './page-on-display.component.html',
  styleUrls: ['./page-on-display.component.scss']
})
export class PageOnDisplayComponent implements OnInit {

  moviesList: Movie[] = [];
  showes: FilmShow[] = [];
  schedules: Schedule[] = [];
  //movie:Movie = new Movie();
  
  arrayDates: Date[] = [];
  // currentDate:Date = new Date();
  // tomorrowDate1 = new Date(new Date().setDate(new Date().getDate()+1));
  // tomorrowDate2 = new Date(new Date().setDate(new Date().getDate()+2));
  // tomorrowDate3 = new Date(new Date().setDate(new Date().getDate()+3));
  // tomorrowDate4 = new Date(new Date().setDate(new Date().getDate()+4));
  // tomorrowDate5 = new Date(new Date().setDate(new Date().getDate()+5));
  // tomorrowDate6 = new Date(new Date().setDate(new Date().getDate()+6));
  
  constructor( private movieWebService: MovieWebService,
               private filmShowService : FilmShowWebService,
               private scheduleService : ScheduleWebService,
               private router: Router
            ) { }

  ngOnInit(): void {
    // replir le tableau des dates : les 7 jours de la semaine 
    this.arrayDates.push(new Date());
    for (let i = 1 ;  i <= 6 ; i++) {
      this.arrayDates.push(new Date(new Date().setDate(new Date().getDate()+i)) );
      
    }
    this.reloadData();
  }
  handleClickBooking(show : FilmShow){

    if (show.bookedSeats && show.showRoom?.seatsQuantity && show.bookedSeats <= show.showRoom?.seatsQuantity) {
      // this.filmShowService.updateFilmShow(show);
      this.filmShowService.bookASeat(show)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        }
      );
      
      // alert(JSON.stringify(show));
    } else {
      alert('aucune place est disponible');
    }
      
  }
  onSubmit(form: NgForm) {
    console.log(form.value['title']);
  }

  onDestroy() {}
  isHidden:boolean = true;
  handleClickDisplaySchedule():void{
    this.isHidden=!this.isHidden;
  }

  reloadData(){
    // recuperer les movies 
    this.movieWebService.getMovies()
      .subscribe(data => {
        this.moviesList = data;
        // console.log('movie liste');
        // console.log(this.moviesList);
      });
    // recuperer les seance planifiees
    this.filmShowService.getFilmShowes().subscribe(data => {
      this.showes = data;
      // console.log('film showes liste');
      // console.log(this.showes);
    });

    // recuperer les schedules 
    this.scheduleService.getSchedules()
    .subscribe( data => {
      this.schedules = data;
      // console.log('schedules  liste');
      // console.log(this.schedules);
    })
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
}
