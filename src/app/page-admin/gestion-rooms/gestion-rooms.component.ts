import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
    this.reloadDataRooms();
  }

  handleClickDeleteRoom(index : number):void{
    //  si une room est dans show-room ne supprime pas ca 
    console.log('deleted ');
    this.roomWebService.deleteRoom(index)
    .subscribe(data => {
      console.log(data);
      this.reloadDataRooms();
    },
    error => {
      console.log(error);
      alert('Cette salle contient des SÉANCE(S) planifiée(s), impossible de la supprimée');
    });
  }
  handleClickAddRoom(formAddRoom : NgForm){
    let room : Room = formAddRoom.value;
    formAddRoom.reset();
    this.roomWebService.addRoom(room)
    .subscribe(data => {
      this.reloadDataRooms();
    },
    error => {
      console.log(error);
      alert('Erreur lors de l\'ajout de la salle, ressayez ');
    });
  }

  reloadDataRooms(){
    this.roomWebService.getRooms()
    .subscribe( data => {
      this.roomList = data;
      console.log(this.roomList[0].filmShow);
    })
  }

}
