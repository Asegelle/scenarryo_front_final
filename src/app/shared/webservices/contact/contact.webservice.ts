import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private urlOpenStreetMap:string;
  private adresse: string;
  private lattitudeCinema: number = 47.2233;
  private longitudeCinema: number = -1.6095;
  private lattitudeUser: number = 47.2018;
  private longitudeUser: number = -1.5431;

  constructor(private http: HttpClient) { 
    this.urlOpenStreetMap='https://www.openstreetmap.org/directions?engine=fossgis_osrm_car&route=';
   }

   //on va chercher à l'adresse de l'utilisateur, sa lattitude et longitude pour la créationd e l'itinéraire
   getLatLongUser(userAdresse): Observable<any> {
    return this.http.get<any>(userAdresse);
   }

   //création itinéraire
   getItineraireURL(itineraireURL): Observable<any> {
    return this.http.get<any>(itineraireURL);
  }


}
