import { FilmShow } from "../film-show";

export class Movie {
            

    id?:number;
    title?:string;
    producer?:string;
    releaseDate?:string;
    ageLimited?:string;
    synopsis?:string;
    duration?:string;
    poster?:string;
    filmShow?:FilmShow[];

    constructor(id?: number, title?:string, producer?:string,releaseDate?:string,ageLimited?:string, synopsis?:string, duration?:string, poster?:string,filmShow?:FilmShow[]){
        this.id=id;
        this.title=title;
        this.producer=producer;
        this.releaseDate=releaseDate;
        this.ageLimited=ageLimited;
        this.synopsis=synopsis;
        this.duration=duration;
        this.poster=poster;
        this.filmShow=filmShow;

    }


        /*
            fullDescription():string {
                return this.id+' '+this.title+' '+this.producer+' '+this.releaseDate+' '+this.ageLimit+' '+this.synopsis+' '+this.duration;
            }
        */

}
