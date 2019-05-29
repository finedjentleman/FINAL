import { Component } from '@angular/core';
import { ChartsModule } from 'ng2-charts';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title = "App";
  
  //PIE CHART!
  
  //days: number[] = [21, 39, 10, 14];
  
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

//LINE CHART!

  public SystemName: string = "No. of cases assigned";
  firstCopy = false;
  
  //this will hold the number of cases assigned to each
  public lineChartData: Array<number> = [ 1,8,49,50,51,15];

  public labelMFL: Array<any> = [
      { data: this.lineChartData,
        label: this.SystemName
      }
  ];
  // labels
  //it should show the names of cases associated with each assignee
  //so each should hold the array of test cases assigned to it
  public lineChartLabels: Array<any> = ["2018-01-29 10:00:00", "2018-01-29 10:27:00", "2018-01-29 10:28:00", "2018-01-29 10:29:00", "2018-01-29 10:30:00" ];

  constructor(  ) { }
  
  //store the maximum and assign to max
  public lineChartOptions: any = {
    responsive: true,
    scales : {
      yAxes: [{
        ticks: {
          max : 60,
          min : 0,
        }
      }],
      xAxes: [{
          type: 'category',
          labels:['A1', 'A2', 'A3', 'A4', 'A5', 'A6']
        }],
    },
  };

  _lineChartColors:Array<any> = [{
       backgroundColor: 'red',
        borderColor: 'red',
        pointBackgroundColor: 'red',
        pointBorderColor: 'red',
        pointHoverBackgroundColor: 'red',
        pointHoverBorderColor: 'red' 
      }];

  public lineChartType = 'line';  

  //SMART TABLE
    settings = {
    /*
    delete: {
      confirmDelete: true,

      deleteButtonContent: 'Delete data',
      saveButtonContent: 'save',
      cancelButtonContent: 'cancel'
    },
    add: {
      confirmCreate: true,
    },
    edit: {
      confirmSave: true,
    },
    */
      columns: {
        /*
        id: {
          title: 'ID',
        },
        name: {
          title: 'Full Name',
        },
        username: {
          title: 'User Name',
        },
        email: {
          title: 'Email',
        },
        */
        tool: {
          title: 'TOOL',
        },
        incident: {
          title: 'INCIDENT',
        },
        assignee: {
          title: 'ASSIGNEE'
        },
        sme: {
          title: 'SME'
        },
        /*
        reason: {
          title: 'REASON'
        },
        */
      },
    };

  data = [
    {
      tool: 'AT',
      incident: "INC512",
      assignee: "Red Tomato",
      sme: "More Red Tomato"
    },
    {
      tool: 'BAT',
      incident: "INC434",
      assignee: "Brown Potato",
      sme: "More Brown Potato"
    },
    {
      tool: 'CAT',
      incident: "REQ1100",
      assignee: "White Onion",
      sme: "More White Onion"
    },
    
  ];

  onDeleteConfirm(event) {
    console.log("Delete Event In Console")
    console.log(event);
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onCreateConfirm(event) {
    console.log("Create Event In Console")
    console.log(event);

  }

  onSaveConfirm(event) {
    console.log("Edit Event In Console")
    console.log(event);
  }

  //chart

  chartOptions = {
    responsive: true
  };

  chartData = [
    { data: [330, 600, 260, 700], label: 'Account A' },
    { data: [120, 455, 100, 340], label: 'Account B' },
    { data: [45, 67, 800, 500], label: 'Account C' }
  ];

}
