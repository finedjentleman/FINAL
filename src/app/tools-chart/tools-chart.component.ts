import { Component } from '@angular/core';

@Component({
  selector: 'tools-chart',
  templateUrl: './tools-chart.component.html',
  styleUrls: ['./tools-chart.component.css']
})

export class ToolsChartComponent{
  
  public pieChartLabels: string[] = ["Tool1", "Tool2", "Tool3", "Tool4", "Tool5", "Tool6"];
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
