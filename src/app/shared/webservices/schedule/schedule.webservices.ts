import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Schedule } from '../../models/schedule';


@Injectable({
  providedIn: 'root'
})
export class ScheduleWebService {
  
  private scheduleUrl = 'http://localhost:8080/admin/schedule';
  

  constructor( private http: HttpClient) { }

  getSchedules(): Observable<Schedule[]> {
    console.log(this.http.get<Schedule[]>(`${this.scheduleUrl}/get`));
    return this.http.get<Schedule[]>(`${this.scheduleUrl}/get`);
  }

  
  deleteSchedules(id:number): Observable<Schedule>{
    console.log(this.http.delete<Schedule>(`${this.scheduleUrl}/delete/${id}`));
    return this.http.delete<Schedule>(`${this.scheduleUrl}/delete/${id}`);
  }


  addSchedules(schedule:Schedule): Observable<Schedule>{
    console.log(this.http.post<Schedule>(`${this.scheduleUrl}/add`, schedule));
    return this.http.post<Schedule>(`${this.scheduleUrl}/add`, schedule); 
  }


  updateSchedules(id:number, schedule:Schedule): Observable<Schedule>{
    console.log(this.http.put<Schedule>(`${this.scheduleUrl}/update/${id}`, schedule));
    return this.http.put<Schedule>(`${this.scheduleUrl}/update/${id}`, schedule); 
  }


}
