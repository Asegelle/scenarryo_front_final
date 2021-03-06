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
    if(this.positionPoster === 1){

    }
      
    
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
    
    let resultIndex = index + this.positionPoster;
    
    //stop la banniere quand on est au extremit??
    if(resultIndex < 0){
      resultIndex = 0;
    } else if (resultIndex > 8) {
      resultIndex = 8;
    }
console.log( "result index : " +index+  "pos:" + this.positionPoster)
    /////////////////////////////////////////////////////////////////////////////////////////////
    /////////////  change class de chaque image afin d'adapt?? le css selon la navigation   ///////
    //////////////////////////////////////////////////////////////////////////////////////////
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

  }
  btnPoster1() {
    
  }
  btnPoster2() {
    
  }
  btnPoster3() {
    
  }
  btnPoster4() {
    
  }
  btnPoster5() {
    
  }
  btnPoster6() {
    
  }
  btnPoster7() {
    
  }
  btnPoster8() {
    
  }
}
