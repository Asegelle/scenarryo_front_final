import { FilmShow } from "./film-show";

export class BookedSeats{

    id?:number;
    placeBookedRow?:number;
    placeBookedColumn?:number;
    filmShow?:FilmShow;
    constructor(id?:number,
                placeBookedRow?:number,
                placeBookedColumn?:number,
                filmShow?:FilmShow

    ){
        this.id = id;
        this.placeBookedRow = placeBookedRow;
        this.placeBookedColumn = placeBookedColumn;
        this.filmShow = filmShow;
    }

}