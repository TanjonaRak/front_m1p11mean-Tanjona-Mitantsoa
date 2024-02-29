import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { ExpensesApiService } from 'src/app/service/Expenses/expenses-api.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-state-manager',
  templateUrl: './state-manager.component.html',
  styleUrls: ['./state-manager.component.css'],
  // imports: [RouterOutlet, CommonModule, CanvasJSAngularChartsModule],
})
export class StateManagerComponent {

  year = new Date().getFullYear();
  month = new Date().getMonth() + 1;

  dataChart = [];
  dataChartBenefice = [];

  constructor(private apiService: ExpensesApiService) {
    // this.apiService.getStateManager(this.year,this.month).subscribe((res:any)=>{
    //   if(res.status === 200){
    //     console.log(res.result)
    //     this.dataChart = res.result;
    //   }
    // });
  }



  async getHoursperEmployee() {
    this.apiService.getStateManager(this.year, this.month).subscribe((res: any) => {
      if (res.status === 200) {
        console.log(res.result)
        this.dataChart = res.result.result;
        this.dataChartBenefice = res.result.benefice
        this.chartOptions = {
          title: {
            text: 'Hours Moyen Per Employee month '+this.monthChoice[this.month-1].name +' year '+this.year ,
          },
          axisX: {
            interval: 2 // Définit l'intervalle entre les barres sur l'axe des x
          },
          theme: 'light2',
          animationEnabled: true,
          exportEnabled: true,
          axisY: {
            includeZero: true,
            // valueFormatString: '#,##0Hours',
          },
          data: [
            {
              type: 'column', //change type to bar, line, area, pie, etc
              // yValueFormatString: '#,##Hours',
              color: '#01b8aa',
              dataPoints: this.dataChart,
            },
          ],
        }
        this.chartOptionsbenefice = {
          title: {
            text: 'Benefice Per Month for  year '+this.year,
          },
          axisX: {
            interval: 1 // Définit l'intervalle entre les barres sur l'axe des x
          },
          theme: 'light',
          animationEnabled: true,
          exportEnabled: true,
          axisY: {
            includeZero: true,
            // valueFormatString: '#,##0Ariary',
          },
          data: [
            {
              type: 'column', //change type to bar, line, area, pie, etc
              yValueFormatString: '#,##0Ariary',
              color: '#01b8aa',
              dataPoints: this.dataChartBenefice,
            },
          ],
        }
      }
    })
  }
  async ngOnInit() {
    console.log(this.month)
    await this.getHoursperEmployee();
    // console.log(this.dataChart,"GJKK")

  }
  chartOptions: any
  chartOptionsbenefice : any;

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

  FilterMonth(form: NgForm) {
    if (form.value.month.value !== "") {
      this.month = form.value.month.value

    }
    if (form.value.year !== "") {
      this.year = form.value.year

    }
    // console.log(form.value.year)
    this.chartOptions = undefined;
    this.chartOptionsbenefice =undefined;
    this.ngOnInit();
  }


}
