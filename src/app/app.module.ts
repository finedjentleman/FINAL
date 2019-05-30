import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//components
import { AppComponent } from './app.component';
import { DaysChartComponent } from './chart-days/chart-days.component';
import { ToolsChartComponent } from './chart-tools/chart-tools.component';
import { AssigneesChartComponent } from './chart-assignees/chart-assignees.component';
import { DetailsTableComponent } from './table-details/table-details.component';

//reading JSON
import { JsonReaderComponent } from './json-reader/json-reader.component';

//charts and tables
import { ChartsModule } from 'ng2-charts';
import { Ng2SmartTableModule } from 'ng2-smart-table';


//materials
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';

//card components
import { CardToolsComponent } from './card-tools/card-tools.component';
import { CardDaysComponent } from './card-days/card-days.component';
import { CardAssigneesComponent } from './card-assignees/card-assignees.component';
import { CardTableComponent } from './card-table/card-table.component';



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
    ChartDaysComponent,
    ChartToolsComponent,
    ChartAssigneesComponent,
    DetailsTableComponent,
    
    CardToolsComponent,
    CardDaysComponent,
    CardAssigneesComponent,
    CardTableComponent
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
