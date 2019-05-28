import { Component, OnInit } from '@angular/core';
import SampleJson from '../../assets/SampleJson.json';

@Component({
  selector: 'json-reader',
  templateUrl: './json-reader.component.html',
  styleUrls: ['./json-reader.component.css']
})

export class JsonReaderComponent{

  constructor(){
    console.log('Reading local json files.');
    console.log(SampleJson);
  }

  ngOnInit(){
    
  }
}