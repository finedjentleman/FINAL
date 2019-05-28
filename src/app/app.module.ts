import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//components
import { AppComponent } from './app.component';
import { DaysChartComponent } from './days-chart/days-chart.component';
import { ToolsChartComponent } from './tools-chart/tools-chart.component';
import { AssigneesChartComponent } from './assignees-chart/assignees-chart.component';

//charts and tables
import { ChartsModule } from 'ng2-charts';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  imports:      [
    BrowserModule, FormsModule,
    ChartsModule,
    Ng2SmartTableModule
    ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
