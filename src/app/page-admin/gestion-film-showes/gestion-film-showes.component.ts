import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FilmShow } from 'src/app/shared/models/film-show';
import { FilmShowWebService } from 'src/app/shared/webservices/film-show/film-show.webservices';

@Component({
  selector: 'app-gestion-film-showes',
  templateUrl: './gestion-film-showes.component.html',
  styleUrls: ['./gestion-film-showes.component.scss']
})
export class GestionFilmShowesComponent implements OnInit {

  filmShowesList: FilmShow[] = [];


  constructor( private filmShowWebService: FilmShowWebService) { }

  ngOnInit(): void {

    this.filmShowWebService.getFilmShowes()
      .subscribe(data => {
        this.filmShowesList = data;
      });
  }

  onSubmit(form: NgForm) {
    console.log(form.value['title']);
    
  }

  onDestroy() {

  }



}