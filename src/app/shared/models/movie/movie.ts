import { FilmShow } from "../film-show";
import { MovieComments } from "../movieComments";

export class Movie {
            

    id?:number;
    title?:string;
    producer?:string;
    releaseDate?:string;
    ageLimited?:string;
    synopsis?:string;
    duration?:string;
    poster?:string;
    comments?:string[];
    filmShow?:FilmShow[];
    filmComment?:MovieComments[];


    constructor(id?: number, title?:string, producer?:string,releaseDate?:string,ageLimited?:string, synopsis?:string, duration?:string, poster?:string,comments?:string[] ,filmShow?:FilmShow[],filmComment?:MovieComments[]){
        this.id=id;
        this.title=title;
        this.producer=producer;
        this.releaseDate=releaseDate;
        this.ageLimited=ageLimited;
        this.synopsis=synopsis;
        this.duration=duration;
        this.poster=poster;
        this.comments=comments;
        this.filmShow=filmShow;
        this.filmComment=filmComment;
    }

}
