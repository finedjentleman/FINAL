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
        for(let i =0;i<this.A.length;i++){
          let resource = data[i];
          console.log(resource["assignee"]);
        }

        //make use of MAP now
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
