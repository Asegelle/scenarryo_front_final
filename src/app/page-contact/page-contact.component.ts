import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-page-contact',
  templateUrl: './page-contact.component.html',
  styleUrls: ['./page-contact.component.scss']
})
export class PageContactComponent implements OnInit, AfterViewInit {
  
  private map:any;
  private latFirstPlace:number = 47.22743110397898;
  private lonFirstPlace:number = -1.6178746585579586;
  private latSecondPlace:number = 47.22274169140698;
  private lonSecondPlace:number = -1.6282311043353408;

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
 
 //creation de l'itineraire
  const routingMap = L.Routing.control({
    waypoints: [
      L.latLng(47.2272173, -1.6186182),
      L.latLng(47.2272177, -1.6186188)
    ],
    routeWhileDragging: true
  });

  routingMap.addTo(this.map);
 
 
  }


 
  constructor() { }

  ngOnInit():void {
      
    }

  ngAfterViewInit(): void {
      this.initMap();
    }
  

  

}