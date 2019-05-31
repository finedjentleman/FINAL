import { Component } from '@angular/core';

import { Incident } from './Incident';//data format for Incident

//for reading json-data
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

type Post = { 
  incident: string;
  assignee: string;
  open: Date;
  closed: Date;
  sme: string;
  tool: string;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {
  title = "App";

  A: any;
  

  constructor(http:HttpClient) {
    const post$:Observable<Post> = <Observable<Post>>http.get('/assets/SampleJson.json');
    
    post$.subscribe(data => 
      {
        this.A = data;
        //this.A holds the values now!
        
        let l = this.A.length;// l stores the length of the data array

        for(let i =0 ;i < this.A.length ;i++){
          let resource = data[i];
          console.log(resource["assignee"]);
        }

        //3 X Dictionary
        //For Tools, Days, Assignees
        /*
        {
          Key:{Set1,Set2,Set3},
          Key:{Set1,Set2,Set3},
        }

        {
          [Tool1]: {{Total1},{Inc1},{Req1}}},
          [Tool2]: {{Total2},{Inc2},{Req2}},
          [Tooln]: {{Totaln},{Incn},{Reqn}},
        }

        EG.- ToolsDict['ToolName'][1] returns the set showing the INC for that tool
        */
        
        let ToolsDict: any = {};//holds total
        let DaysDict: any = {};
        let AssigneesDict: any = {};
        
        //for tools
        for(let i = 0; i < this.A.length; i++){
          
          let resource = data[i];
          let tool = resource["tool"];
          let incident = resource["incident"];

          if(ToolsDict[tool] == null){
            console.log(ToolsDict[tool]+" is null");
            ToolsDict[tool] = [];
            ToolsDict[tool].push(incident);
          }
          else{
            console.log("pushing: " + incident);
            ToolsDict[tool].push(incident);
            console.log("pushed: " + incident);
          }
        }

        //for days
        for(let i = 0; i < this.A.length; i++){
          let resource = data[i];
          let open = resource["open"];
          let closed = resource["closed"];
          let incident = resource["incident"];
          
          let time: number; // holds total time elapsed
          
          DaysDict[0] = [];
          DaysDict[1] = [];
          DaysDict[2] = [];
          DaysDict[3] = [];

          if(DaysDict[closed] == "NULL"){
            time = (new Date().getTime() - new Date(open).getTime());//in milliseconds
            DaysDict[resource["open"]] = [];
            DaysDict[resource["open"]].push(resource["incident"]);
          }
          else{
            time = (new Date(closed).getTime() - new Date(open).getTime());//in milliseconds
          }

          if(time < 5 * 86400000) DaysDict[0].push(incident);
          else if(time < 15 * 86400000) DaysDict[1].push(incident);
          else if(time < 30 * 86400000) DaysDict[2].push(incident);
          else DaysDict[3].push(incident);
        }

        //for assignees
        for(let i = 0; i < this.A.length; i++){
          let resource = data[i];
          let incident = resource["incident"];
          let assignee = resource["assignee"];

          if(ToolsDict[assignee] == null){
            console.log(ToolsDict[assignee]+" is null");
            ToolsDict[assignee] = [];
            ToolsDict[assignee].push(incident);
          }
          else{
            console.log("pushing: " + incident);
            ToolsDict[assignee].push(incident);
            console.log("pushed: " + incident);
          }
        }
        
        


      }
    );
 
  }
}
