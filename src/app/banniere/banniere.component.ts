import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../shared/models/movie/movie';
import { MovieWebService } from '../shared/webservices/movie/movie.webservice';

@Component({
  selector: 'app-banniere',
  templateUrl: './banniere.component.html',
  styleUrls: ['./banniere.component.scss']
})
export class BanniereComponent implements OnInit {

  moviesList: Movie[] = [];
  marginleftPoster:number;
  positionPoster:number = 0;
  zoomPosterValue:number;
  WIDTH_POSTER = 110;
  backgroundColorButton0:string;
  backgroundColorButton1:string;
  backgroundColorButton2:string;
  backgroundColorButton3:string;
  backgroundColorButton4:string;
  backgroundColorButton5:string;
  backgroundColorButton6:string;
  backgroundColorButton7:string;
  backgroundColorButton8:string;

  // indexPoster:number;
  // isAvailable;
  // marginValue:number;

  constructor( private movieWebService: MovieWebService) { }

  ngOnInit(): void {

    //recup list de movies
    this.getBannierePoster();  

    //focus sur l'image central de notre liste
    // this.marginValue = this.marginValue + 25;

    //test ngClass //todo : glisser automatique sur la list avec setTimeout

    //la banniere parcours les images toutes les 2sec
    // faire une boucle infinie

      // setTimeout((_) => (this.positionPoster = (this.positionPoster-1)), 4000 );
      // setTimeout((_) => (this.positionPoster = (this.positionPoster-1)), 8000 );
      // setTimeout((_) => (this.positionPoster = (this.positionPoster-1)), 12000 );
      // setTimeout((_) => (this.positionPoster = (this.positionPoster-1)), 16000 );

      // setTimeout((_) => (this.positionPoster = (this.positionPoster+1)), 20000 );  
      // setTimeout((_) => (this.positionPoster = (this.positionPoster+1)), 24000 );
      // setTimeout((_) => (this.positionPoster = (this.positionPoster+1)), 28000 );
      // setTimeout((_) => (this.positionPoster = (this.positionPoster+1)), 32000 );
      // setTimeout((_) => (this.positionPoster = (this.positionPoster+1)), 34000 );
      // setTimeout((_) => (this.positionPoster = (this.positionPoster+1)), 38000 );
      // setTimeout((_) => (this.positionPoster = (this.positionPoster+1)), 42000 );  

      
  }

  getBannierePoster() {
    this.movieWebService.getMovies()
      .subscribe(data => {
        this.moviesList = data;
    });
  }

  handleClickBtnPrecedent() {
    // if (this.marginValue < 0) {
      // this.marginValue = this.marginValue + this.WIDTH_POSTER;
    // }
    if(this.positionPoster != 4 ) {
      this.positionPoster++;
    } else {
      this.positionPoster = 4; // Mettre -4 pour que la banniere retourne a la fin de la liste
    }

    console.log(this.positionPoster);
    //change class pour remettre en place le css
    
    /////////////////////////////////////////////////
    ////// TODO //////////////////////////////////////
    /////////////////////////////////////////////////
    //changer quand on clique sur precedent/suivant changement couleur button en bas
    // if(this.positionPoster === 0){
    //   this.btnPoster0();
    // } else if (this.positionPoster === 1){
    //   this.btnPoster1();
    // } else if (this.positionPoster === 2){
    //   this.btnPoster2();
    // } else if (this.positionPoster === 3){
    //   this.btnPoster3();
    // } else if (this.positionPoster === 4){
    //   this.btnPoster4();
    // } else if (this.positionPoster === 5){
    //   this.btnPoster5();
    // }
      
    
    console.log('handleClickBtnPrecedent');
  }

  handleClickBtnSuivant() {
    // if (this.marginValue >= (-this.moviesList.length - 4 * this.WIDTH_POSTER)) {
    //   //deplace la liste overflow(hidden si pas dans la div) vers la droite
    //   this.marginValue = this.marginValue - this.WIDTH_POSTER;
    // }

      //blocage quand on arrive a la fin du carrousel => OK
      if(this.positionPoster != -4){
        this.positionPoster--;
      } else {
        this.positionPoster = -4; //bloque le btn suivant du caroussel
      }
      
      

    // }
    console.log('handleClickBtnSuivant');
  }

  // get marginPx() {
  //   return this.marginValue + 'px';
  // }

  // get zoomPx() {
  //   return this.zoomPosterValue + '%';
  // }
  // get marginleftP() {
  //   if(this.positionPoster === 1 && this.positionPoster === 1) {
  //     this.marginleftPoster = 40;
  //   } 
  //   return this.marginleftPoster + 'px';
  // }


  handleGetPosterClass(index:number) {
    // this.indexPoster = index; //recupère l'index des Poster () 
    let resultIndex = index + this.positionPoster;
    
    //stop la banniere quand on est au extremité
    if(resultIndex < 0){
      resultIndex = 0;
    } else if (resultIndex > 8) {
      resultIndex = 8;
    }
console.log( "result index : " +index+  "pos:" + this.positionPoster)
console.log('resultIndex : ' + resultIndex);    
/////////////////////////////////////////////////////////////////////////////////////////////
/////////////  change class de chaque image afin d'adapté le css selon la navigation   ////////////////////////////////////////////////////////////////////////////////////////////////
    //image0 && position a partir de 0 au milieu du caroussel 
    // le premier est un test qui modifie l'image la plus a gauche du carroussel quand on clique une fois sur suivant
    
    //partie gauche du caroussel (=> regarder le console log du navigateur)
    if (index === 1 && this.positionPoster === 0){
      return 'poster' + 'change7';
    } else if(index === 5 && this.positionPoster === 0){
      return 'poster' + 'change8';
    } else if (index === 4 && this.positionPoster === 1){
      return 'poster' + 'change3';
    } else if(index === 0 && this.positionPoster === 1){
      return 'poster' + 'change2';
    } else if(index === 3 && this.positionPoster === 2){
      return 'poster' + 'change4';
    } else if(index === 0 && this.positionPoster === 2){
      return 'poster' + 'change1';
    } else if(index === 1 && this.positionPoster === 4){
      return 'poster' + 'change6';
    } else if(index === 0 && this.positionPoster === 3){
      return 'poster' + 'change10';
    } else if(index === 2 && this.positionPoster === 3){
      return 'poster' + 'change5';
    } 
    
    //partie droite du caroussel
    else if(index === 6 && this.positionPoster === -1){
      return 'poster' + 'change11';
    } else if(index === 2 && this.positionPoster === -1){
      return 'poster' + 'change12';
    } else if(index === 3 && this.positionPoster === -2){
      return 'poster' + 'change13';
    } else if(index === 7 && this.positionPoster === -2){
      return 'poster' + 'change14';
    } else if(index === 4 && this.positionPoster === -3){
      return 'poster' + 'change15';
    } else if(index === 8 && this.positionPoster === -3){
      return 'poster' + 'change16';
    }
     

    return 'poster' + resultIndex; 
  }

  // boucleOnMovieList(){
  //   if(this.positionPoster === 5) {
  //     for(let i=0; i<this.moviesList.length;i++ ){
  //       this.moviesList.push(this.moviesList[i]); 
  //     }
  //   }
  // }

  /////////////////////////////////
  //////EVENT BUTTON (en bas) ////
  /////////////////////////////////

  btnPoster0() {
     this.positionPoster = 4;
     this.backgroundColorButton0 = "rgb(54, 50, 50)";
     this.backgroundColorButton1 = "white";
     this.backgroundColorButton2 = "white";
     this.backgroundColorButton3 = "white";
     this.backgroundColorButton4 = "white";
     this.backgroundColorButton5 = "white";
     this.backgroundColorButton6 = "white";
     this.backgroundColorButton7 = "white";
     this.backgroundColorButton8 = "white";
  }
  btnPoster1() {
    this.positionPoster = 3;
    this.backgroundColorButton0 = "white";
    this.backgroundColorButton1 = "rgb(54, 50, 50)";
    this.backgroundColorButton2 = "white";
    this.backgroundColorButton3 = "white";
    this.backgroundColorButton4 = "white";
    this.backgroundColorButton5 = "white";
    this.backgroundColorButton6 = "white";
    this.backgroundColorButton7 = "white";
    this.backgroundColorButton8 = "white";
  }
  btnPoster2() {
    this.positionPoster = 2;
    this.backgroundColorButton0 = "white";
    this.backgroundColorButton1 = "white";
    this.backgroundColorButton2 = "rgb(54, 50, 50)";
    this.backgroundColorButton3 = "white";
    this.backgroundColorButton4 = "white";
    this.backgroundColorButton5 = "white";
    this.backgroundColorButton6 = "white";
    this.backgroundColorButton7 = "white";
    this.backgroundColorButton8 = "white";
  }
  btnPoster3() {
    this.positionPoster = 1;
    this.backgroundColorButton0 = "white";
    this.backgroundColorButton1 = "white";
    this.backgroundColorButton2 = "white";
    this.backgroundColorButton3 = "rgb(54, 50, 50)";
    this.backgroundColorButton4 = "white";
    this.backgroundColorButton5 = "white";
    this.backgroundColorButton6 = "white";
    this.backgroundColorButton7 = "white";
    this.backgroundColorButton8 = "white";
  }
  btnPoster4() {
    this.positionPoster = 0;
    this.backgroundColorButton0 = "white";
    this.backgroundColorButton1 = "white";
    this.backgroundColorButton2 = "white";
    this.backgroundColorButton3 = "white";
    this.backgroundColorButton4 = "rgb(54, 50, 50)";
    this.backgroundColorButton5 = "white";
    this.backgroundColorButton6 = "white";
    this.backgroundColorButton7 = "white";
    this.backgroundColorButton8 = "white";
  }
  btnPoster5() {
    this.positionPoster = -1;
    this.backgroundColorButton0 = "white";
    this.backgroundColorButton1 = "white";
    this.backgroundColorButton2 = "white";
    this.backgroundColorButton3 = "white";
    this.backgroundColorButton4 = "white";
    this.backgroundColorButton5 = "rgb(54, 50, 50)";
    this.backgroundColorButton6 = "white";
    this.backgroundColorButton7 = "white";
    this.backgroundColorButton8 = "white";
  }
  btnPoster6() {
    this.positionPoster = -2;
    this.backgroundColorButton0 = "white";
    this.backgroundColorButton1 = "white";
    this.backgroundColorButton2 = "white";
    this.backgroundColorButton3 = "white";
    this.backgroundColorButton4 = "white";
    this.backgroundColorButton5 = "white";
    this.backgroundColorButton6 = "rgb(54, 50, 50)";
    this.backgroundColorButton7 = "white";
    this.backgroundColorButton8 = "white";
  }
  btnPoster7() {
    this.positionPoster = -3;
    this.backgroundColorButton0 = "white";
    this.backgroundColorButton1 = "white";
    this.backgroundColorButton2 = "white";
    this.backgroundColorButton3 = "white";
    this.backgroundColorButton4 = "white";
    this.backgroundColorButton5 = "white";
    this.backgroundColorButton6 = "white";
    this.backgroundColorButton7 = "rgb(54, 50, 50)";
    this.backgroundColorButton8 = "white";
  }
  btnPoster8() {
    this.positionPoster = -4;
    this.backgroundColorButton0 = "white";
    this.backgroundColorButton1 = "white";
    this.backgroundColorButton2 = "white";
    this.backgroundColorButton3 = "white";
    this.backgroundColorButton4 = "white";
    this.backgroundColorButton5 = "white";
    this.backgroundColorButton6 = "white";
    this.backgroundColorButton7 = "white";
    this.backgroundColorButton8 = "rgb(54, 50, 50)";
  }
}
