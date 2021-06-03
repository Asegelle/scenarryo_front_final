import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild('seatsQuantity') elementSeat! : ElementRef;
  @ViewChild('rows') elementRows! : ElementRef;
  @ViewChild('cols') elementCols! : ElementRef;
  handleClickAddRoom(formAddRoom : NgForm){
    let room : Room = formAddRoom.value;
    if(!room.rowsNumber ){
      console.log('je suis dans else ');
        
        this.elementRows.nativeElement.focus();
        alert('le nombre de rang ne dois pas être null');

    }else 
    if( !room.columnsNumber ){
      console.log('je suis dans else ');
        this.elementCols.nativeElement.focus();
        alert('le nombre de place ne dois pas être null');

    }else 
    if( !room.seatsQuantity ){
        this.elementSeat.nativeElement.focus();
        alert('le nombre de place total ne dois pas être null');

    }else 
     if(room.seatsQuantity <= room.columnsNumber*room.rowsNumber){
      // total seats inférieur au produit
      this.roomWebService.addRoom(room)
      .subscribe(data => {
        this.reloadDataRooms();
        formAddRoom.reset();
        window.location.reload;
      },
      error => {
        console.log(error);
        alert('Erreur lors de l\'ajout de la salle, vérifiez si ce numéro existe déjà  ');
      });
    } 
    else {
      this.elementSeat.nativeElement.focus();
      alert('le nombre de total de place n\'est pas en adéquation avec nombre de rang ');
      
    }
  }

  reloadDataRooms(){
    this.roomWebService.getRooms()
    .subscribe( data => {
      this.roomList = data;
      console.log(this.roomList[0].filmShow);
    })
  }

}
