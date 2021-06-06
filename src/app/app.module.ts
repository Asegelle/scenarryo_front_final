import { ApiMovieWebService } from './shared/webservices/api-movie/apiMovie.webservice';
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
import { GestionRoomsComponent } from './page-admin/gestion-rooms/gestion-rooms.component';
import { PageOnDisplayComponent } from './page-on-display/page-on-display.component';

import { GestionFilmShowesComponent } from './page-admin/gestion-film-showes/gestion-film-showes.component';

import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { PageMovieDetailsComponent } from './page-movie-details/page-movie-details.component';
import { PageBookingComponent } from './page-booking/page-booking.component';
import { PageContactComponent } from './page-contact/page-contact.component';
import { PageAdminComponent } from './page-admin/page-admin.component';
import { GestionMoviesComponent } from './page-admin/gestion-movies/gestion-movies.component';
import { GestionSchedulesComponent } from './page-admin/gestion-schedules/gestion-schedules.component';
import { RoomWebService } from './shared/webservices/room/room.webservice';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { authInterceptorProviders } from './shared/helpers/auth.interceptor';
import { PagePaymentComponent } from './page-payment/page-payment.component';
import { TermsOfUseComponent } from './page-payment/terms-of-use/terms-of-use.component';
import { PageQuizzComponent } from './page-quizz/page-quizz.component';

import { ChartsModule } from 'ng2-charts';

/* Traduction de la date en français  */
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import  localeFrExtra  from '@angular/common/locales/extra/fr';
import { BookedSeatsService } from './shared/webservices/booked-seats/booked-seats.service';
import { BanniereComponent } from './banniere/banniere.component';

registerLocaleData(localeFr,'fr-FR',localeFrExtra);

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
    GestionFilmShowesComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardUserComponent,
    BoardModeratorComponent,
    PagePaymentComponent,
    TermsOfUseComponent,
    PageQuizzComponent,
    BanniereComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ChartsModule
    
  ],
  providers: [
    MovieService,
    BookedSeatsService,
    MovieWebService,
    RoomWebService,
    ApiMovieWebService,
    authInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
