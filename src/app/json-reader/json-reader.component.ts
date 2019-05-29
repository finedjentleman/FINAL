//Reads data from '../../assets/SampleJson.json'

import { Component, OnInit } from '@angular/core';
import SampleJson from '../../assets/SampleJson.json';

@Component({
  selector: 'json-reader',
  templateUrl: './json-reader.component.html',
  styleUrls: ['./json-reader.component.css']
})

export class JsonReaderComponent{
  
  list: string[] = [];
  //loop over json data and store it inside the list array

  constructor(){
    console.log('Reading local json files.');
    console.log(SampleJson);
  }

  ngOnInit(){
    
  }
}