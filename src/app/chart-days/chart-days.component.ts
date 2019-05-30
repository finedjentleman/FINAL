import { Component } from '@angular/core';

@Component({
  selector: 'chart-days',
  templateUrl: './chart-days.component.html',
  //styleUrls: ['./chart-days.component.css']
})

export class ChartDaysComponent{
  public pieChartLabels: string[] = ["Less than 5 days", "Less than 15 days", "Less than 30 days", "More than 30 days"];
  public pieChartData: number[] = [21, 39, 10, 14];
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