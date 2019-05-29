import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//components
import { AppComponent } from './app.component';
import { DaysChartComponent } from './days-chart/days-chart.component';
import { ToolsChartComponent } from './tools-chart/tools-chart.component';
import { AssigneesChartComponent } from './assignees-chart/assignees-chart.component';
import { DetailsTableComponent } from './details-table/details-table.component';

//reading JSON
import { JsonReaderComponent } from './json-reader/json-reader.component';

//charts and tables
import { ChartsModule } from 'ng2-charts';
import { Ng2SmartTableModule } from 'ng2-smart-table';


//materials
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CardToolsComponent } from './card-tools/card-tools.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports:      [
    BrowserModule, FormsModule,
    ChartsModule,
    Ng2SmartTableModule,
    
    BrowserAnimationsModule,
    MatCardModule
    ],
  declarations: [ AppComponent,
    JsonReaderComponent,
    DaysChartComponent,
    ToolsChartComponent,
    AssigneesChartComponent,
    DetailsTableComponent,
    
    CardToolsComponent
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
