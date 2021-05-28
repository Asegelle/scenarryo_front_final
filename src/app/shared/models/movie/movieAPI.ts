import { FilmShow } from "../film-show";


export class APIMovie {
            

    id?:number;
    title?:string;
    producer?:string;
    releaseDate?:Date;
    synopsis?:string;
    duration?:string;
    poster?:string;
    

    constructor(movieAPI: any){
        this.title = movieAPI.title;
        this.producer = movieAPI.producer;
        this.releaseDate = movieAPI.releaseDate;
        this.synopsis = movieAPI.synopsis;
        this.duration = movieAPI.duration;
        this.poster = movieAPI.poster;
       

    }


        /*
            fullDescription():string {
                return this.id+' '+this.title+' '+this.producer+' '+this.releaseDate+' '+this.ageLimit+' '+this.synopsis+' '+this.duration;
            }
        */

}
