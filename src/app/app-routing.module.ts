import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { GestionFilmShowesComponent } from './page-admin/gestion-film-showes/gestion-film-showes.component';
import { GestionMoviesComponent } from './page-admin/gestion-movies/gestion-movies.component';
import { GestionRoomsComponent } from './page-admin/gestion-rooms/gestion-rooms.component';
import { GestionSchedulesComponent } from './page-admin/gestion-schedules/gestion-schedules.component';
import { PageAdminComponent } from './page-admin/page-admin.component';
import { PageBookingComponent } from './page-booking/page-booking.component';
import { PageContactComponent } from './page-contact/page-contact.component';
import { PageMovieDetailsComponent } from './page-movie-details/page-movie-details.component';

import { PageOnDisplayComponent } from './page-on-display/page-on-display.component';
import { PagePaymentComponent } from './page-payment/page-payment.component';
import { TermsOfUseComponent } from './page-payment/terms-of-use/terms-of-use.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

import { PageQuizzComponent } from './page-quizz/page-quizz.component';

const routes: Routes = [
  {path:'', component: HomePageComponent},
  {path:'terms-of-use', component: TermsOfUseComponent},
  {path:'page-payment', component: PagePaymentComponent},
  {path:'home-page', component: HomePageComponent},
  {path:'page-on-display', component: PageOnDisplayComponent},
  {path:'page-booking', component: PageBookingComponent},
  {path:'page-contact', component: PageContactComponent},
  {path:'page-movie-details', component: PageMovieDetailsComponent},
  {path:'page-admin', component: PageAdminComponent},
  {path:'page-quizz', component: PageQuizzComponent},
  {path:'gestion-movies', component: GestionMoviesComponent},
  {path:'gestion-rooms', component: GestionRoomsComponent},
  {path:'gestion-film-showes', component: GestionFilmShowesComponent},
  {path:'gestion-schedules', component: GestionSchedulesComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'profile', component: ProfileComponent},
  {path:'user', component: BoardUserComponent },
  {path:'mod', component: BoardModeratorComponent },
  {path:'admin', component: BoardAdminComponent }


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
