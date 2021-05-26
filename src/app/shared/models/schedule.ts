import { FilmShow } from "./film-show";

export class Schedule {
            

    id?:number;
    showDate?:Date;
    startingHour?:string;
    endingHour?:string;
    //scheduleShow?:FilmShow[];

    //movieShow?:FilmShow[];

    constructor(id?: number, showDate?:Date, startingHour?:string,endingHour?:string){
        this.id=id;
        this.showDate=showDate;
        this.startingHour=startingHour;
        this.endingHour=endingHour;
        //this.scheduleShow=scheduleShow;


    }




}
