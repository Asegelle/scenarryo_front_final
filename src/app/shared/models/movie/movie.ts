export class Movie {
            

    id?:number;
    title?:string;
    producer?:string;
    releaseDate?:Date;
    ageLimited?:string;
    synopsis?:string;
    duration?:string;
    poster?:string;
    //movieShow?:FilmShow[];

    constructor(id?: number, title?:string, producer?:string,releaseDate?:Date,ageLimited?:string, synopsis?:string, duration?:string, poster?:string){
        this.id=id;
        this.title=title;
        this.producer=producer;
        this.releaseDate=releaseDate;
        this.ageLimited=ageLimited;
        this.synopsis=synopsis;
        this.duration=duration;
        this.poster=poster;
        //this.movieShow=movieShow;

    }


        /*
            fullDescription():string {
                return this.id+' '+this.title+' '+this.producer+' '+this.releaseDate+' '+this.ageLimit+' '+this.synopsis+' '+this.duration;
            }
        */

}
