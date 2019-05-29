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
  
  // events on slice click
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  // event on pie chart slice hover
  public chartHovered(e:any):void {
    console.log(e);
  }

//LINE CHART!

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
