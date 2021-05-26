import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';

import { HttpClientModule } from '@angular/common/http';
import { MovieWebService } from './shared/webservices/movie/movie.webservice';
import { MovieService } from './shared/services/movie/movie.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PageOnDisplayComponent } from './page-on-display/page-on-display.component';
import { PageBookingComponent } from './page-booking/page-booking.component';
import { PageMovieDetailsComponent } from './page-movie-details/page-movie-details.component';
import { PageContactComponent } from './page-contact/page-contact.component';
import { PageAdminComponent } from './page-admin/page-admin.component';
import { GestionMoviesComponent } from './page-admin/gestion-movies/gestion-movies.component';
import { GestionRoomsComponent } from './page-admin/gestion-rooms/gestion-rooms.component';
import { GestionSchedulesComponent } from './page-admin/gestion-schedules/gestion-schedules.component';
import { GestionFilmShowesComponent } from './page-admin/gestion-film-showes/gestion-film-showes.component';
import { RoomWebService } from './shared/webservices/room/room.webservice';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    PageOnDisplayComponent,
    PageBookingComponent,
    PageMovieDetailsComponent,
    PageContactComponent,
    PageAdminComponent,
    GestionMoviesComponent,
    GestionRoomsComponent,
    GestionSchedulesComponent,
    GestionFilmShowesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  providers: [
    MovieService,
    MovieWebService,
    RoomWebService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
