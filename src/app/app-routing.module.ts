import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { GestionFilmShowesComponent } from './page-admin/gestion-film-showes/gestion-film-showes.component';
import { GestionMoviesComponent } from './page-admin/gestion-movies/gestion-movies.component';
import { GestionRoomsComponent } from './page-admin/gestion-rooms/gestion-rooms.component';
import { GestionSchedulesComponent } from './page-admin/gestion-schedules/gestion-schedules.component';
import { PageAdminComponent } from './page-admin/page-admin.component';
import { PageBookingComponent } from './page-booking/page-booking.component';
import { PageContactComponent } from './page-contact/page-contact.component';
import { PageMovieDetailsComponent } from './page-movie-details/page-movie-details.component';
import { PageOnDisplayComponent } from './page-on-display/page-on-display.component';

const routes: Routes = [
  {path:'', component: HomePageComponent},
  {path:'home-page', component: HomePageComponent},
  {path:'page-on-display', component: PageOnDisplayComponent},
  {path:'page-booking', component: PageBookingComponent},
  {path:'page-contact', component: PageContactComponent},
  {path:'page-movie-details', component: PageMovieDetailsComponent},
  {path:'page-admin', component: PageAdminComponent},
  {path:'gestion-movies', component: GestionMoviesComponent},
  {path:'gestion-rooms', component: GestionRoomsComponent},
  {path:'gestion-film-showes', component: GestionFilmShowesComponent},
  {path:'gestion-schedules', component: GestionSchedulesComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }