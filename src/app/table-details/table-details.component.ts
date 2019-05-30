import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'table-details',
  templateUrl: './table-details.component.html',
  styleUrls: ['./table-details.component.css']
})

export class TableDetailsComponent{

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
      
      actions: {
        add : false,
        edit: false,
        delete: false,
      },
      
      columns: {
        
        tool: {
          title: 'TOOL',
          filter: {
            type: 'list',
            config: {
              selectText: 'Select...',
              list: [
                { value: 'AT', title: 'AT'}, // this includes 'bat', 'cat'
                { value: 'BAT', title: 'BAT'},
                { value: 'CAT', title: 'CAT'},

                
              ],
            },
          },
        },

        incident: {
          title: 'INCIDENT',
          sort: true,
          sortDirection: 'asc',
        },

        assignee: {
          title: 'ASSIGNEE',
          filter: {
            type: 'list',
            config: {
              selectText: 'Select...',
              list: [
                
                { value: 'Brown Potato', title: 'Brown Potato'},
                { value: 'Red Tomato', title: 'Red Tomato'},
                { value: 'White Onion', title: 'White Onion'},
              ],
            },
          },
        },

        sme: {
          title: 'SME',
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

  /*
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
  */
  onMouseOver(event){
    //show the hyperlink to the id
    console.log("Mouse over: " + this.data[event].tool);
  }

}