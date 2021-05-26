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


  constructor( private scheduleWebService: ScheduleWebService) { }

  ngOnInit(): void {

    this.scheduleWebService.getSchedules()
      .subscribe(data => {
        this.schedulesList = data;
      });
  }

  onSubmit(form: NgForm) {
    console.log(form.value['title']);
    
  }

  onDestroy() {

  }



}

