import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/shared/models/room';
import { RoomWebService } from 'src/app/shared/webservices/room/room.webservice';

@Component({
  selector: 'app-gestion-rooms',
  templateUrl: './gestion-rooms.component.html',
  styleUrls: ['./gestion-rooms.component.scss']
})
export class GestionRoomsComponent implements OnInit {

  roomList:Room[] =[];
  constructor(private roomWebService : RoomWebService) { }

  ngOnInit(): void {
    this.roomWebService.getRooms()
    .subscribe( data => {
      console.log('data');
      this.roomList = data;
    })
  }

}
