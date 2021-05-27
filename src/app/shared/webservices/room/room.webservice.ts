import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Room } from "../../models/room";

@Injectable({
  providedIn: 'root'
})
export class RoomWebService{

  private urlRoom: string;
  // room : Room;

  constructor(private http : HttpClient){
    this.urlRoom = 'http://localhost:8080/admin/room';
  }
  getRooms():Observable<Room[]>{

    return this.http.get<Room[]>(this.urlRoom);
  }
}