import { Movie } from "./movie/movie";


export class MovieComments {

    id?:number;
    comment?:string;
    commentMovie?:Movie;


    constructor(id?: number, comment?:string, commentMovie?:Movie){
        this.id=id;
        this.comment=comment;
        this.commentMovie=commentMovie;
    }

    

}
