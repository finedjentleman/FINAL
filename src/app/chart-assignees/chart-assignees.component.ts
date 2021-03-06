import { Component } from '@angular/core';

@Component({
  selector: 'chart-assignees',
  templateUrl: './chart-assignees.component.html',
  //styleUrls: ['./chart-assignees.component.css']
})

export class ChartAssigneesComponent{
  
  

  public lineChartType = 'line';  
    
  public SystemName1: string = "No. of cases assigned";
  public SystemName2: string = "No. of escalations made";

  firstCopy = false;
  
  public lineChartData1: Array<number> = [ 1,8,49,50,51,15];
  public lineChartData2: Array<number> = [ 19, 12, 15, 34, 31, 11];

  public labelMFL: Array<any> = [
      { data: this.lineChartData1,
        label: this.SystemName1
      },
      
      { data: this.lineChartData2,
        label: this.SystemName2
      },
      
  ];

  // labels
  //it should show the names of cases associated with each assignee
  //so each should hold the array of test cases assigned to it
  public lineChartLabels: Array<any> = ["2018-01-29 10:00:00", "2018-01-29 10:27:00", "2018-01-29 10:28:00", "2018-01-29 10:29:00", "2018-01-29 10:30:00" ];

  constructor(  ) { }
  
  public lineChartOptions: any = {
    responsive: true,
    scales : {
      yAxes: [{
        ticks: {
          max : 60,
          min : 0,
        },
        gridLines: {
            color: 'rgba(255,0,0,0.3)',
        },
      }],
      xAxes: [{
          type: 'category',
          labels:['A1', 'A2', 'A3', 'A4', 'A5', 'A6']
        }],
    },
    //LEGEND POSITION
    legend: {position: 'bottom'}
  };

  _lineChartColors:Array<any> = [{
       backgroundColor: 'red',
        borderColor: 'red',
        pointBackgroundColor: 'red',
        pointBorderColor: 'red',
        pointHoverBackgroundColor: 'red',
        pointHoverBorderColor: 'red' 
      }];

  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}