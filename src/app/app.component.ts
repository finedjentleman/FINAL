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
        let ToolsDictInc: any = {};//holds INC
        let ToolsDictReq: any = {};//hold REQ

        //for tools
        for(let i = 0; i < this.A.length; i++){
          let resource = data[i];
          console.log("Current tool: " + resource["tool"]);
          
          if(ToolsDict[resource["tool"]] == null){
            console.log(ToolsDict[resource["tool"]]+" is null");
            ToolsDict[resource["tool"]] = [];
            ToolsDict[resource["tool"]].push(resource["incident"]);
          }
          else{
            console.log("pushing: " + resource["incident"]);
            ToolsDict[resource["tool"]].push(resource["incident"]);
            console.log("pushed: " + resource["incident"]);
          }
        }

        console.log("Tools dict: " + ToolsDict);
        
        

        let DaysDict: any = {};
        let AssigneesDict: any = {};
        

        //iterate, and if the entry is in the map, add the 





      }
    );


    
  }
  /*
  constructor(http:HttpClient) {
    this.http.get('../../assets/SampleJson.json')
                 .subscribe(data => console.log(data));
    );
  */
}
