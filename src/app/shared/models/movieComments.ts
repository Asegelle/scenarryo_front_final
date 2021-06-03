import { Movie } from "./movie/movie";

// class corresponding to movie comments
export class MovieComments {

    // --------------------------------------------------------------------------------
    // Variables
    id?:number;
    comment?:string;
    commentMovie?:Movie;


    // --------------------------------------------------------------------------------
    // Constructor
    constructor(id?: number, comment?:string, commentMovie?:Movie){
        this.id=id;
        this.comment=comment;
        this.commentMovie=commentMovie;
    }

    

}
