import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'details-table',
  templateUrl: './details-table.component.html',
  styleUrls: ['./details-table.component.css']
})

export class DetailsTableComponent{

  constructor(){
  }

  ngOnInit(){
    
  }

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

}