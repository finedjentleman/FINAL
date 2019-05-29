import { Component } from '@angular/core';

@Component({
  selector: 'assignees-chart',
  templateUrl: './assignees-chart.component.html',
  //styleUrls: ['./assignees-chart.component.css']
})

export class AssigneesChartComponent{
  
  public pieChartLabels: string[] = ["A1", "A2", "A3", "A4", "A5", "A6"];
  public pieChartData: number[] = [13, 10, 25, 20, 4, 19];
  public pieChartType: string = 'pie';
  public pieChartOptions: any = {
    'backgroundColor': [
      "#FF6384",
      "#4BC0C0",
      "#FFCE56",
      "#E7E9ED",
      "#36A2EB",
    ]
  }
  
  
  // events on slice click
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  // event on pie chart slice hover
  public chartHovered(e:any):void {
    console.log(e);
  }
}