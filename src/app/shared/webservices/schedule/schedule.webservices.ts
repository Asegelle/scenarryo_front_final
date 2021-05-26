import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Schedule } from '../../models/schedule';


@Injectable({
  providedIn: 'root'
})
export class ScheduleWebService {
  
  private urlSchedules: string;
  schedule = Schedule;
  

  constructor( private http: HttpClient) {
    this.urlSchedules= 'http://localhost:8080//admin/schedule';
   }

  getSchedules(): Observable<Schedule[]> {
    
    console.log(this.http.get<Schedule[]>(this.urlSchedules ));

    return this.http.get<Schedule[]>(this.urlSchedules);
  }

  
}
