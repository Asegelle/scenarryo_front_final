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
    this.urlRoom = 'http://localhost:8080/admin/room/';
  }
  getRooms():Observable<Room[]>{
    
    return this.http.get<Room[]>(this.urlRoom+'getAll');
  }
  
  deleteRoom(index: number):Observable<Room> {
    return this.http.delete<Room>(this.urlRoom+'delete/'+index);
  }
  
  addRoom(room: Room):Observable<Room> {
    return this.http.post(this.urlRoom+'add',room);
  }
  // deleteSchedules(id:number): Observable<Schedule>{
    
    //   console.log(this.http.delete<Schedule>(${this.deleteScheduleUrl}/${id}));
    
    //   return this.http.delete<Schedule>(${this.deleteScheduleUrl}/${id});
  // }
  
}