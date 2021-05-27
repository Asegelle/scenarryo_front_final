import { Movie } from "./movie/movie";
import { Room } from "./room";
import { Schedule } from "./schedule";

export class FilmShow {
            

    id?:number;
    priceTicket?:number;
    bookedSeats?:number;
    showRoom?:Room;
    showSchedule?:Schedule;
    showMovie?:Movie;

    constructor(id?: number, priceTicket?:number, bookedSeats?:number,showRoom?:Room, showSchedule?:Schedule, showMovie?:Movie){
        this.id=id;
        this.priceTicket=priceTicket;
        this.bookedSeats=bookedSeats;
        this.showRoom=showRoom;
        this.showSchedule=showSchedule;
        this.showMovie=showMovie;


    }


}
