import { FilmShow } from "./film-show";

export class Room{
    id?:number;
    roomNumber?:number;
    seatsQuantity?:number;

    filmShow?:FilmShow[];
    
    constructor(id?:number,
                roomNumber?:number,
                seatsQuantity?:number,
                filmShow?:FilmShow[]
    ){
        this.id = id ;
        this.roomNumber = roomNumber;
        this.seatsQuantity = seatsQuantity;
        this.filmShow = filmShow;
    }
}