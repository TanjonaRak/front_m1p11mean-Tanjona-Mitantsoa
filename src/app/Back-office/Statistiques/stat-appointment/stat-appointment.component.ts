import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { data } from 'src/app/model/modelAll';
import { EmployeeServiceService } from 'src/app/service/employee-service.service';

@Component({
  selector: 'app-stat-appointment',
  templateUrl: './stat-appointment.component.html',
  styleUrls: ['./stat-appointment.component.css']
})

export class StatAppointmentComponent {
  month = new Date().getMonth() + 1;
  year = new Date().getFullYear();
  dataChart :any[]= [];
  dataChart2 :any[]= [];
  title = 'angular17ssrapp';
  chart: any;

  chartOptions :  any
  chartOptions2 :  any

  monthChoice = [
    { "name": "January", value: 1 },
    { "name": "february", value: 2 },
    { "name": "Mars", value: 3 },
    { "name": "April", value: 4 },
    { "name": "May", value: 5 },
    { "name": "June", value: 6 },
    { "name": "July", value: 7 },
    { "name": "Aout", value: 8 },
    { "name": "September", value: 9 },
    { "name": "October", value: 10 },
    { "name": "November", value: 11 },
    { "name": "December", value: 12 },
  ]
  yearchoice = [
    2024,
    2023,
    2022,
    2021,
    2020,
    2019
  ]

  constructor(public apiService: EmployeeServiceService) { }
  ngOnInit() {
    this.getTurnover();
    this.getState();
    
  }
  FilterMonth(form: NgForm) {
    if (form.value.month.value !== "") {
      this.month = form.value.month.value

    }
    if (form.value.year !== "") {
      this.year = form.value.year

    }
    // console.log(form.value.year)
    this.chartOptions = undefined;
    this.chartOptions2 =undefined;
    this.ngOnInit();
  }
  getState() {
    this.apiService.getNbrAppointmentPerDayPerMonth(this.year, this.month).subscribe((res: any) => {
      console.log("oke");
      if (res.status) {
        let datas = []
        for(let i = 0;i<res.data.length;i++){
          
          let d = {
            "x":new Date(res.data[i].x),
            "y" : res.data[i].y}
            datas.push(d);
        }
        this.dataChart = datas;
        this.chartOptions = {
          animationEnabled: true,
          theme: "light2",
          title: {
            text: "Number of Appointment"
          },
          
          axisY: {
            title: "Number of Appointments"
          },
          toolTip: {
            shared: true
          },
          legend: {
            cursor: "pointer",
            itemclick: function (e: any) {
              if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                e.dataSeries.visible = false;
              } else {
                e.dataSeries.visible = true;
              }
              e.chart.render();
            }
          },
          data: [{
            type: "line",
            showInLegend: true,
            name: "Projected Sales",
            // xValueFormatString: "MMM DD, YYYY",
            dataPoints:this.dataChart
          },
          ]
        }
      }
    });

  }

  getTurnover() {
    this.apiService.getTurnover(this.year, this.month).subscribe((res: any) => {
      console.log("okeres",res);
      if (res.status) {
        let datas = []
        for(let i = 0;i<res.data.length;i++){
          
          let d = {
            "x":new Date(res.data[i].x),
            "y" : res.data[i].y}
            datas.push(d);
        }
        this.dataChart2 = datas;
        this.chartOptions2 = {
          animationEnabled: true,
          theme: "light2",
          title: {
            text: "Turnover"
          },
          
          axisY: {
            title: "Number of Appointments"
          },
          toolTip: {
            shared: true
          },
          legend: {
            cursor: "pointer",
            itemclick: function (e: any) {
              if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                e.dataSeries.visible = false;
              } else {
                e.dataSeries.visible = true;
              }
              e.chart.render();
            }
          },
          data: [{
            type: "line",
            showInLegend: true,
            name: "Projected Sales",
            // xValueFormatString: "MMM DD, YYYY",
            dataPoints:this.dataChart2 
          },
          ]
        }
      }
    });

  }

}
