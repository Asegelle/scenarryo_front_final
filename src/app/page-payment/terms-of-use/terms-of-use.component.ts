import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-terms-of-use',
  templateUrl: './terms-of-use.component.html',
  styleUrls: ['./terms-of-use.component.scss']
})
export class TermsOfUseComponent implements OnInit {
  // movieId : number ;
  // showId : number ;
  idShowReceived : number;
  idMovieReceived : number;
  constructor(private router : Router,
              private route :ActivatedRoute
  ){ this.route.queryParams.subscribe(
                params => {
                  this.idShowReceived = Number(params.idShow);
                  this.idMovieReceived = Number(params.idMovie);
                  
                })
      }

  ngOnInit(): void {
    console.log(this.idShowReceived);
  }

  hundleClickAccepteTermsOfUse(){
    let queryNavigation : NavigationExtras = {
      queryParams : {
        idShow : this.idShowReceived,
        idMovie : this.idMovieReceived
      }
    }
    this.router.navigate(['page-payment'],queryNavigation);
  }

}
