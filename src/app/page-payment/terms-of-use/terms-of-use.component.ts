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
  idShow : number;
  idMovie : number;
  constructor(private router : Router,
              private route :ActivatedRoute
  ){ this.route.queryParams.subscribe(
                params => {
                  this.idShow = Number(params.idShow);
                  this.idMovie = Number(params.idMovie);
                  
                })
      }

  ngOnInit(): void {
    
  }

  hundleClickAccepteTermsOfUse(){
    let queryNavigation : NavigationExtras = {
      queryParams : {
        idShow : this.idShow,
        idMovie : this.idMovie
      }
    }
    this.router.navigate(['page-payment'],queryNavigation);
  }

}
