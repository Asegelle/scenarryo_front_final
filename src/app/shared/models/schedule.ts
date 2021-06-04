import { FilmShow } from "./film-show";

// class corresponding to schedules
export class Schedule {
            
    // --------------------------------------------------------------------------------
    // Variables
    id?:number;
    showDate?:Date;
    startingHour?:string;
    endingHour?:string;
    filmShow?:FilmShow[];

    
    // --------------------------------------------------------------------------------
    // Constructor
    constructor(id?: number, showDate?:Date, startingHour?:string,endingHour?:string,filmShow?:FilmShow[] ){
        this.id=id;
        this.showDate=showDate;
        this.startingHour=startingHour;
        this.endingHour=endingHour;
        this.filmShow=filmShow;


    }




}
