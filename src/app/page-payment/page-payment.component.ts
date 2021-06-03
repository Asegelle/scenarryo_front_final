import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
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

import { jsPDF} from 'jspdf';
import html2canvas from 'html2canvas';

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

  rowSeat : number = 0;
  colSeat: number =0 ;
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
  filmShow : FilmShow;
  ngOnInit(): void {
    this.reloadData();
    
  }

  handleClickPayment(form : NgForm){

    // partie creation du bookedSeats et insersion en BDD
    let bookedSeat : BookedSeats = new BookedSeats(0,this.rowSeat,this.colSeat,this.showSelected);
    form.reset();
    if(this.showSelected.bookedSeats < this.showSelected.showRoom.seatsQuantity){
      this.bookedSeatsService.bookASeat(bookedSeat)
      .subscribe(
        data => {
          this.savePdf(bookedSeat);
          this.reloadData();
          window.location.reload;
  
        }
      );

    }else{
      
      alert('Malheuresement, aucune place n\'est disponible ')
      this.router.navigate(['page-on-display']);
    }
  }

  handleClickGetSeatRowAndColumn(row :number ,col : number ){
    this.rowSeat = row;
    this.colSeat = col ;
  }

  functionConvertPositionToAlphabet(row : number ) :string {
    const tab = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let alphabet = tab[row%26-1] ;
    return alphabet+( Math.floor(row/26));
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
  // le canvas ne marche pas 
  // @ViewChild('content', { static: true}) el!: ElementRef<HTMLImageElement>;
  // pdf(){
  //   html2canvas(this.el.nativeElement).then( (canvas) => {
  //     const imgData = canvas.toDataURL('image/jpeg');
  //     const pdf = new jsPDF({
  //       orientation: 'portrait',
  //     });
  //     const imageProps = pdf.getImageProperties(imgData);
  //     const pdfw = pdf.internal.pageSize.getWidth();
  //     const pdfh = (imageProps.height*pdfw)/ imageProps.width;

  //     pdf.addImage(imgData,'PNG',0,0,pdfw,pdfh);
  //     pdf.save('myPdf.pdf');

  //   })
  // }

  @ViewChild('htmlData', {static : true}) htmlData!:ElementRef<HTMLDivElement>;
  savePdf(bookedSeat : BookedSeats){
    let DATA = this.htmlData.nativeElement;

    let doc = new jsPDF({
        orientation: 'portrait',
      });
    
    //  transform the image to a dataURL
    // code ne marche pas 
    // html2canvas(this.htmlData.nativeElement).then(
    //   (canvas) => {
    //     const posterToURL = canvas.toDataURL('image/jpeg');
    //     const imageProps = doc.getImageProperties(posterToURL);
    //     const pdfw = doc.internal.pageSize.getWidth() * 0.8;
    //     const pdfh = (imageProps.height*pdfw)/ imageProps.width;
    //     doc.addImage(posterToURL,'PNG',35,55,pdfw,pdfh);
    //     console.log(' je suis dan html2canvas ');
    //     console.log(posterToURL);

    //   }
    // )

    /* 
      son code HTML 
      <div>
        <button (click) = "savePdf()">2ieme methode</button>
        <div #htmlData>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
            <img src="{{ movieSelected?.poster }}" width="200px">
        </div>
    </div>
      ------------------ HTML del aofnction pdf()

    <div>
        <h1>titre </h1>

        <h2>Convertir HTML to PDF </h2>
        <button (click) = "pdf()">Covertir Pdf</button>
        <div id="content" #content>
            <h1>this is the pdf </h1>
            <p>Générer par Princess Yousra </p>
        </div>
    </div>
    */


    doc.text(this.movieSelected.title, 35, 25);
    doc.text(this.showSelected.showSchedule.showDate.toString() + ' - ' + this.showSelected.showSchedule.startingHour, 35, 35);
    doc.text("Rang : "+ this.functionConvertPositionToAlphabet(bookedSeat.placeBookedRow) + " place : " + bookedSeat.placeBookedColumn, 35, 45);
      console.log(this.movieSelected.poster);

    doc.addImage("https://lh3.googleusercontent.com/proxy/QY22Til0mKvOvq-nvCgj1Kh9u-jr93YqOsxsBHNqVdnrOg_O5Rt_9y6o6UmTx23WJchVry-ElXPjoRT5tqsBIJZpEruzm8WcgmpLQEMdg8QpnyU", "JPEG", 55, 100, 80, 80);

     doc.save('pdfsimple.pdf');
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
          this.bookedSeatsService.getBookedSeatsByShow(this.showSelected.id)
          .subscribe( data => {
            this.bookedSeats = data;
            console.log(data);
          });
        }
      })
    });
  }
  

}
