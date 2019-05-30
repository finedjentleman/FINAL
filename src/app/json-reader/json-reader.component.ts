//Reads data from '../../assets/SampleJson.json'

import { Component, OnInit } from '@angular/core';
import SampleJson from '../../assets/SampleJson.json';

import {Incident} from '../Incident';//data format for Incident

//for reading json-data
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

type Post = { title: string, content: string };

@Component({
  selector: 'json-reader',
  templateUrl: './json-reader.component.html',
  styleUrls: ['./json-reader.component.css']
})

export class JsonReaderComponent{
  
  //A is an array, that will store the data sets of type Incident
  //A: Array<Incident>;

  constructor(http:HttpClient){
    const post$:Observable<Post> = <Observable<Post>> http.get('/assets/data.json');
    post$.subscribe(console.log);
  }

  ngOnInit(){
    
  }
}