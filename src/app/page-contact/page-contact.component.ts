import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { ContactService } from 'src/app/shared/webservices/contact/contact.webservice';
import { HttpClient } from '@angular/common/http';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-page-contact',
  templateUrl: './page-contact.component.html',
  styleUrls: ['./page-contact.component.scss']
})
export class PageContactComponent implements OnInit, AfterViewInit {
  
  private map:any;
  private streetNumber:string;
  private streetName:string;
  private cityName:string;
  private streetType:string;
  private userLattitude: any;
  private userLongitude: any;
  itineraireURL = 'ggg';
  isAvailable:boolean = false;
    

  private initMap(): void {
    this.map = L.map('map', {
      center: [ 47.2272173, -1.6186182 ],
      zoom: 14
    });

    //création de la map
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  
  //icône sur l'adresse du cinéma avec son nom en popup
    const myIcon = L.icon({
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png'
    });
    L.marker([47.2272173, -1.6186182], {icon: myIcon}).bindPopup('Cinéma SCENARRY\'O').addTo(this.map).openPopup();

////////////////////////////////////////////////
//////////////    TO DO        ////////////////
///////////////////////////////////////////////
    // //creation de l'itineraire a l'affichage
    // L.Routing.control({
    //     // Nous personnalisons le tracé
    //     lineOptions: {
    //       styles: [{color: '#ff8f00', opacity: 1, weight: 7}]
    //     },

    //     // Nous personnalisons la langue et le moyen de transport
    //       router: new L.Routing.osrmv1({
    //       language: 'fr',
    //       profile: 'car', // car, bike, foot
    //     }),
    //       waypoints: [
    //         L.latLng(47.2272173, -1.6186182),
    //         L.latLng(47.2272173, -1.6186182)
    //     ],
    //     routeWhileDragging: true,
    //     geocoder: L.Control.Geocoder.nominatim()
    // }).addTo(this.map);

  }


 
  constructor( private openStreetMapWebService: ContactService, private http: HttpClient ) {
    
   }

  ngOnInit():void {
    
      
    
  }

  ngAfterViewInit(): void {
      this.initMap();
    }
  

  handleClickItineraire(formFindMovie: NgForm) {

    let userAdresse: string;

    //  ici recupere les infos du form de l'adresse du user
    this.streetNumber = formFindMovie.value['streetNumber'];
    this.streetType = formFindMovie.value['streetType'];
    this.streetName = formFindMovie.value['streetName'];
    this.cityName = formFindMovie.value['cityName'];

    //remplace les espaces vide par %20 pour chercher la latt long de l'adresse indiquée dans le form
    this.streetName = this.streetName.replace(/ /g, "%20");
          // this.cityName = this.streetName.replace(/ /g, "%20");
          // console.log(this.cityName)

    //récupération du JSON contenant la lattitude/longitude de l'adress user
    userAdresse = 'https://nominatim.openstreetmap.org/search?q='+ this.streetNumber + '+' + this.streetName + '+' + this.streetType + ',+' + this.cityName + '&format=json&polygon=1&addressdetails=1'; 

     this.openStreetMapWebService.getLatLongUser(userAdresse).subscribe(data=> {
      if(data!=undefined){
        //récupération de la latt/long du JSON
        this.userLattitude = data[0].lat;
        this.userLongitude = data[0].lon;
      }else{
        console.log('undefined data');
      }
    });

// ////////////////////////////////////////
////    Création itinéraire map       /////
///////////////////////////////////////////
      let scenarryoLattitude:number = 47.2272173;
      let scenarryoLongitude:number = -1.6186182;
      
      //rend le lien h ref visible
      this.isAvailable = true;
      //url qui comprend la latt/long du user + latt/long du cinéma
      this.itineraireURL = 'https://www.openstreetmap.org/directions?engine=fossgis_osrm_car&route=' + scenarryoLattitude +'%2C' + scenarryoLongitude +'%3B'+ this.userLattitude +'%2C' + this.userLongitude + '#';
      

      //deuxieme marqueur sur la carte pour marquer l'adresse user
      const myIcon = L.icon({
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png'
      });
      L.marker([this.userLattitude, this.userLongitude], {icon: myIcon}).bindPopup('USER').addTo(this.map).openPopup();



  

//////////////////////////////////////////////////////
///    Affichage de la map avec l'itinéraire      ////
/////////////////////////////////////////////////////      

  }


}
