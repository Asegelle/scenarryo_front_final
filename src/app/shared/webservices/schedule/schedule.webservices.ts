import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Schedule } from '../../models/schedule';


@Injectable({
  providedIn: 'root'
})
export class ScheduleWebService {
  
  // url to reach schedule methods in back-end
  private scheduleUrl = 'http://localhost:8080/admin/schedule';
  

  // --------------------------------------------------------------------------------
  // Constructor
  constructor( private http: HttpClient) { }


  // --------------------------------------------------------------------------------
  // Methods

  // ------------------------- get --------------------------
 /**
  * function  getSchedules :
  * @returns this.http.get<Schedule[]>(`${this.scheduleUrl}/get`); 
  */
  getSchedules(): Observable<Schedule[]> {
    //console.log(this.http.get<Schedule[]>(`${this.scheduleUrl}/get`));
    return this.http.get<Schedule[]>(`${this.scheduleUrl}/get`);
  }

  // ------------------------- delete --------------------------
  /**
   * function deleteSchedules :
   * @param id (id of the schedule to delete)
   * @returns this.http.delete<Schedule>(`${this.scheduleUrl}/delete/${id}`);
   */
  deleteSchedules(id:number): Observable<Schedule>{
    //console.log(this.http.delete<Schedule>(`${this.scheduleUrl}/delete/${id}`));
    return this.http.delete<Schedule>(`${this.scheduleUrl}/delete/${id}`);
  }

  // ------------------------- post --------------------------
  /**
   * function addSchedules :
   * @param schedule (object schedule to add in bdd)
   * @returns this.http.post<Schedule>(`${this.scheduleUrl}/add`, schedule); 
   */
  addSchedules(schedule:Schedule): Observable<Schedule>{
    //console.log(this.http.post<Schedule>(`${this.scheduleUrl}/add`, schedule));
    return this.http.post<Schedule>(`${this.scheduleUrl}/add`, schedule); 
  }

  // ------------------------- put --------------------------
  /**
   * function updateSchedules :
   * @param id (id of schedule to update)
   * @param schedule (object schedule sent ib bdd)
   * @returns this.http.put<Schedule>(`${this.scheduleUrl}/update/${id}`, schedule); 
   */
  updateSchedules(id:number, schedule:Schedule): Observable<Schedule>{
    //console.log(this.http.put<Schedule>(`${this.scheduleUrl}/update/${id}`, schedule));
    return this.http.put<Schedule>(`${this.scheduleUrl}/update/${id}`, schedule); 
  }


}
