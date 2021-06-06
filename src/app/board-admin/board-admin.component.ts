import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { Room } from '../shared/models/room';
import { UserService } from '../shared/webservices/login-signup/user.service';
import { RoomWebService } from '../shared/webservices/room/room.webservice';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.scss']
})
export class BoardAdminComponent implements OnInit {
  content?: string;
  roomList:Room[] =[];
  constructor(private roomWebService : RoomWebService,private userService: UserService) { }

  
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = ['salle 0', 'salle 2', 'salle 3', 'salle 4', 'salle 5'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [7, 0, 0, 0, 0], label: '	Nombre de séances programmées pas salle' }
  ];




  ngOnInit(): void {
    this.userService.getAdminBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );

    this.reloadDataRooms();
  }


  reloadDataRooms(){
    this.roomWebService.getRooms()
    .subscribe( data => {
      this.roomList = data;
     
      
    })
  }


}
