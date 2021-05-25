import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private test: string = ' Test service projet Scenarryo  ';
 

  constructor(private httpService: HttpClient) { 
   
  }

  getTest(): string {
    return this.test;
  }




}
