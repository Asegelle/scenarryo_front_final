import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { Room } from '../shared/models/room';
import { RoomWebService } from '../shared/webservices/room/room.webservice';


@Component({
  selector: 'app-page-admin',
  templateUrl: './page-admin.component.html',
  styleUrls: ['./page-admin.component.scss']
})
export class PageAdminComponent implements OnInit {

  roomList:Room[] =[];
  constructor(private roomWebService : RoomWebService) { }

  
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
    this.reloadDataRooms();
  }

  reloadDataRooms(){
    this.roomWebService.getRooms()
    .subscribe( data => {
      this.roomList = data;
     
      
    })
  }








  getBarChartData(){

  }

  getBarChartLabels(): Array<{data:string, label:string}>{
    const dataAttr1 = "aa";
    const dataAttr2 = "bb";
    const dataAttr3 = "cc";
    return [
        { data: dataAttr1, label: 'Attr1' },
        { data: dataAttr2, label: 'Attr2' },
        { data: dataAttr3, label: 'Attr3' }
    ];
  }




}


