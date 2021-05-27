import { FilmShow } from "./film-show";

export class Schedule {
            

    id?:number;
    showDate?:Date;
    startingHour?:string;
    endingHour?:string;
    filmShow?:FilmShow[];

    //movieShow?:FilmShow[];

    constructor(id?: number, showDate?:Date, startingHour?:string,endingHour?:string,filmShow?:FilmShow[] ){
        this.id=id;
        this.showDate=showDate;
        this.startingHour=startingHour;
        this.endingHour=endingHour;
        this.filmShow=filmShow;


    }




}
