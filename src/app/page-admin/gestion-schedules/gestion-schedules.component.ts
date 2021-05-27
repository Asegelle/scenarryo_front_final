import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Schedule } from 'src/app/shared/models/schedule';
import { ScheduleWebService } from 'src/app/shared/webservices/schedule/schedule.webservices';

@Component({
  selector: 'app-gestion-schedules',
  templateUrl: './gestion-schedules.component.html',
  styleUrls: ['./gestion-schedules.component.scss']
})
export class GestionSchedulesComponent implements OnInit {

  schedulesList: Schedule[] = [];
  emptySchedule: Schedule = new Schedule();
  submitted:boolean = false;

  schedule: Schedule = {
    showDate:undefined,
    startingHour:"",
    endingHour:""
  };





  constructor( private scheduleWebService: ScheduleWebService) { }

  getSchedules(){
    this.scheduleWebService.getSchedules()
    .subscribe(data => {
      this.schedulesList = data;
    });
  }

  newSchedule(): void {
    this.schedule = {
      showDate:undefined,
      startingHour:"",
      endingHour:""
    };
  }

  

  ngOnInit(): void {
    this.getSchedules();
  }





  handleClickDeleteSchedule(id:number):void{
    this.scheduleWebService.deleteSchedules(id)
    .subscribe(data => {
      console.log(data);
      this.getSchedules();
    },
    error => {
      console.log(error);
    });
  }


  onSubmitAddSchedule():void{
    this.emptySchedule = {
      showDate:this.schedule.showDate,
      startingHour:this.schedule.startingHour,
      endingHour:this.schedule.endingHour
    };
    this.scheduleWebService.addSchedules(this.emptySchedule)
    .subscribe(response => {
      console.log(response);
      this.submitted=true;
      this.getSchedules();
      this.newSchedule();
    },
    error => {
      console.log(error);
    });
  }






  onDestroy() {
  }


}

